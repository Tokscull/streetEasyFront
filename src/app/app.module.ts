import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaleComponent } from './components/sale/sale.component';
import { RentComponent } from './components/rent/rent.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './components/registration/registration.component';
import {FormsModule} from '@angular/forms';
import {HttpService} from './services/http/http.service';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { MapsComponent } from './components/maps/maps.component';
import {MapsService} from './services/maps/maps.service';

const appRouter: Routes = [
  {path: '', component: RentComponent},
  {path: 'rent', component: RentComponent},
  {path: 'sale', component: SaleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    RentComponent,
    LoginComponent,
    RegistrationComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_shxXXxlrijwGTfBLXrSU3m0oMtzTRDg'
    })
  ],
  providers: [HttpService, MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
