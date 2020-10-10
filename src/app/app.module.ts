import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponentModule } from './hello.component';
import { CardsComponent } from '../cards/cards.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';;
import {HttpClientModule} from '@angular/common/http'
import { SingleItemPageComponent } from './single-item-page/single-item-page.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HelloComponentModule, HttpClientModule,  Ng2SearchPipeModule, AppRoutingModule ],
  declarations: [ AppComponent, CardsComponent ,SingleItemPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }