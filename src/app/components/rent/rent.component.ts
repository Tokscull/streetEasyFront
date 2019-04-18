import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {HttpService} from '../../services/http/http.service';
import {log} from 'util';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  title = 'Rent';
  currentUser: User;

  constructor(private httpService: HttpService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    console.log(JSON.parse(localStorage.getItem('currentUser')));
  }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('currentUser');
    window.location.reload();
  }

  getCurrentUser() {
    this.httpService.getCurrentUser()
      .subscribe(value => {
        this.currentUser = value;
        console.log(value);
        },
        error => {
          console.log(error);
        });
  }
}
