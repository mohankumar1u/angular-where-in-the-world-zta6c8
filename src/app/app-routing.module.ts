import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SingleItemPageComponent } from './single-item-page/single-item-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'cards', component:AppComponent},
   { path: 'singleCards', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}