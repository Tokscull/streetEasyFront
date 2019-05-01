import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apartment} from '../../models/Apartment';
import {AppComponent} from '../../app.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http: HttpClient) {
  }


  insertApartment(apartment: Apartment) {
    return this.http.post(AppComponent.API_URL + '/apartments/insertApartment', apartment);
  }

  public getAllApartments(): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/apartments/getAllApartments');
  }

  public getApartmentById(id: number): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartments/getApartmentById', id);
  }

  getApartmentsByUser(userId: number): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartments/getApartmentsByUser', userId);
  }

  updateApartment(apartment: Apartment) {
    return this.http.post(AppComponent.API_URL + '/apartments/updateApartment', apartment);
  }

  deleteApartRent(apartment: Apartment) {
    return this.http.post(AppComponent.API_URL + '/apartments/deleteApartment', apartment);
  }

  getApartmentsByPriceBetween(price): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartments/getApartmentsByPriceBetween', price);
  }

  getApartmentsByPriceBetweenAndRoomCountBetween(priceAndRoomCount): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartments/getApartmentsByPriceBetweenAndRoomCountBetween', priceAndRoomCount);
  }

  getApartmentsByPriceBetweenAndRoomCountIn(priceAndRoomCount): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartments/getApartmentsByPriceBetweenAndRoomCountIn', priceAndRoomCount);
  }


  /*SALE*/
  getAllApartmentsSale(): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/apartmentsSale/getAllApartmentsSale');
  }

  insertApartmentSale(apartment: Apartment): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartmentsSale/insertApartmentSale', apartment);
  }

  getApartmentsSaleByUser(userId: number): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartmentsSale/getApartmentsSaleByUser', userId);
  }

  public getApartmentSaleById(id: number): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartmentsSale/getApartmentSaleById', id);
  }

  deleteApartSale(apartment: Apartment) {
    return this.http.post(AppComponent.API_URL + '/apartmentsSale/deleteApartmentSale', apartment);
  }

  updateApartmentSale(apartment: Apartment) {
    return this.http.post(AppComponent.API_URL + '/apartmentsSale/updateApartmentSale', apartment);
  }

  getApartmentsSaleByPriceBetween(price): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartmentsSale/getApartmentsSaleByPriceBetween', price);
  }

  getApartmentsSaleByPriceBetweenAndRoomCountBetween(priceAndRoomCount): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartmentsSale/getApartmentsSaleByPriceBetweenAndRoomCountBetween', priceAndRoomCount);
  }

  getApartmentsSaleByPriceBetweenAndRoomCountIn(priceAndRoomCount): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/apartmentsSale/getApartmentsSaleByPriceBetweenAndRoomCountIn', priceAndRoomCount);
  }
}
