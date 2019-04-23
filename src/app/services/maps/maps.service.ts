import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<Location>('http://api.ipapi.com/check?access_key=94cd07ccb3f7dac90b9bcf64c0e1905c');
  }
}
