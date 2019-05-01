import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AppComponent} from '../../app.component';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAllAddresses(): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/address/getAllAddresses');
  }

  getAllAddressesSale(): Observable<any>  {
    return this.http.get(AppComponent.API_URL + '/addressSale/getAllAddresses');
  }
}
