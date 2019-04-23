import { Component } from '@angular/core';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static API_URL = 'http://localhost:8080';
  title = 'streetEasyFront';
  currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logOut() {
    localStorage.removeItem('currentUser');
    window.location.reload();
  }
}
