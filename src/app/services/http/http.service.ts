import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {AppComponent} from '../../app.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }


   logIn(username: string, password: string) {
    return this.http.get(AppComponent.API_URL + '/account/login', {
      headers: {
        Accept: 'application/json',
        Authorization: 'Basic ' + btoa(username + ':' + password)
      }
    }).pipe(map((user: Response) => {
      // login successful if there's a jwt token in the response
      console.log(user);
      if (user) {
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }));
  }

  public getCurrentUser(): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/account/currentUser');
  }
}
