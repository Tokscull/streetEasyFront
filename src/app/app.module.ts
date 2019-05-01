import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaleComponent } from './components/sale/sale.component';
import { RentComponent } from './components/rent/rent.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './components/registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { MapsComponent } from './components/maps/maps.component';
import {CarouselModule, CollapseModule} from 'ngx-bootstrap';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { AddApartComponent } from './components/add-apart/add-apart.component';
import {MapService} from './services/map/map.service';
import {ApartmentService} from './services/apartment/apartment.service';
import {AddressService} from './services/address/address.service';
import {UserService} from './services/user/user.service';
import { AccountComponent } from './components/account/account.component';
import { CurrentApartComponent } from './components/current-apart/current-apart.component';
import {FileUploadModule} from 'ng2-file-upload';
import { UpdateApartComponent } from './components/update-apart/update-apart.component';
import {Ng5SliderModule} from 'ng5-slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FiltrComponent } from './components/filtr/filtr.component';

const appRouter: Routes = [
  {path: '', component: RentComponent},
  {path: 'rent', component: RentComponent},
  {path: 'sale', component: SaleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'add', component: AddApartComponent},
  {path: 'account', component: AccountComponent},
  {path: 'apart/:type/:id', component: CurrentApartComponent},
  {path: 'updateApart/:type/:id', component: UpdateApartComponent},
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
    ApartmentsComponent,
    AddApartComponent,
    AccountComponent,
    CurrentApartComponent,
    UpdateApartComponent,
    FiltrComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng5SliderModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter),
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_shxXXxlrijwGTfBLXrSU3m0oMtzTRDg'
    }),
    CarouselModule,
    FileUploadModule,
    CollapseModule
  ],
  providers: [UserService, MapService, ApartmentService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
