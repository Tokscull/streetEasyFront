import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaleComponent } from './components/sale/sale.component';
import { RentComponent } from './components/rent/rent.component';
import {RouterModule, Routes} from '@angular/router';

const appRouter: Routes = [
  {path: '', component: RentComponent},
  {path: 'sale', component: SaleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    RentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
