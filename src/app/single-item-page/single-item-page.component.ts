import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-item-page',
  templateUrl: './single-item-page.component.html',
  styleUrls: ['./single-item-page.component.css']
})
export class SingleItemPageComponent implements OnInit {
  selectedCard:any;
  darkmode:string;
  cardborders:any;
  @Input()
   set OneInput({selectedCard, darkmode, cardborders}) {  
      //console.log(card)
      this.selectedCard = selectedCard
      this.darkmode = darkmode
      this.cardborders = cardborders
   }
    @Output() backToList = new EventEmitter<any>();

  constructor() { }
   onBackToList(){
     console.log("back button clicked")
    let value ={};
    this.cardborders =[];
    this.backToList.emit(value);
  }
  goToBorderCard(card){
    console.log(card);
    this.backToList.emit(card);
  }

  ngOnInit() {
    console.log(this.selectedCard)
  }

}