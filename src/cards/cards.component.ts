import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {AppService} from "../app/app.service";
import {Routes, RouterModule, Router} from '@angular/router';
@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  card: any;
  selectedBrand: string;
  darkmode: string;

  @Input()
  set OneInput({ card, selectedBrand, searchText, darkmode }) {
    //console.log(card)
    this.card = card;
    this.selectedBrand = selectedBrand;
    this.darkmode = darkmode;
  }
  @Output() itemSelected = new EventEmitter();

  constructor(private router: Router) {}

  singleItem(card) {
    this.itemSelected.emit(card);
    this.router.navigate(['/singleCards'])
  }
  load(){
     this.AppService.getCardDetails().subscribe(element => {
      this.cards = element;
      let obj = [];
      for (let [key, value] of Object.entries(this.cards)) {
        obj.push(value.region);
        // Object.assign(this.region , {key: value.region});
      }
      this.region = obj.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      });
      this.region[6] = "filter by Region";
      console.log(this.region,"caeds");
    });
  }
  ngOnInit() {
   this.load
  }
}
