import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { AppService } from "./app.service";
import {Routes, RouterModule, Router} from '@angular/router';
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AppService]
})
// @Pipe({
//     name: 'filter'
// })
//@Injectable()
export class AppComponent {
  name = "Angular";
  cards: any;
  title = "Angular Search Using ng2-search-filter";
  region = [];
  selectedBrand = "filter by Region";
  searchText;
  darkmode = "darkmode-off";
  selectedCard = {};
  cardborders =[];
  constructor(private AppService: AppService, private router: Router) {}
  ngOnInit() {
    this.getCardDetails1();
    console.log(this.selectedCard);
  }
  valueSelected() {
    console.log(this.selectedBrand);
  }
  onBackToList(card) {
    console.log(card,"call")
    this.cardborders =[];
    this.selectedCard = card;
  }
  onItemSelected(card) {
     this.cardborders =[];
     console.log(card.borders);
     if(card.borders==undefined){
       this.selectedCard = card;
       this.router.navigate(['/cards'])
     }else{
        for(let i=0;i<card.borders.length; i++){
     for (let [key, value] of Object.entries(this.cards)) {
       if(card.borders[i]==value.alpha3Code){
         this.cardborders.push(value);  
       }
        //obj.push(value.region);
        // Object.assign(this.region , {key: value.region});
      }
    }
    this.selectedCard = card;
     }
   
   // console.log(this.selectedCard);
  }
  darkmodeChange() {
    if (this.darkmode === "darkmode-off") {
      this.darkmode = "darkmode-on";
      console.log("darkmode");
    } else {
      this.darkmode = "darkmode-off";
    }
  }
  getCardDetails1 = () => {
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
      console.log(this.region);
    });
  };
}
