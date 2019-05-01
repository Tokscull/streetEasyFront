import { Component, OnInit } from '@angular/core';
import {Apartment} from '../../models/Apartment';
import {ApartmentService} from '../../services/apartment/apartment.service';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  apartmentsRent: Apartment[];
  apartmentSale: Apartment[];
  isShowApartRent: boolean;
  isShowApartSale: boolean;
  isShowUser: boolean;
  user: User;


  constructor(private apartmentService: ApartmentService, private userService: UserService) {
  }

  ngOnInit() {
    this.apartmentService.getApartmentsByUser(JSON.parse(localStorage.getItem('currentUser')).principal.id)
      .subscribe(value => {
          this.apartmentsRent = value;
          this.showApart();
        },
        error => {
          console.log(error);
        });
    this.apartmentService.getApartmentsSaleByUser(JSON.parse(localStorage.getItem('currentUser')).principal.id)
      .subscribe(value => {
          this.apartmentSale = value;
          this.showApart();
        },
        error => {
          console.log(error);
        });
    this.user = new User();
  }

  showApart() {
    if (this.apartmentsRent.length > 0) {
      this.isShowApartRent = true;
    }
    if (this.apartmentSale.length > 0) {
      this.isShowApartSale = true;
    }
    this.isShowUser = false;
  }

  showUser() {
    this.isShowApartRent = false;
    this.isShowApartSale = false;
    this.isShowUser = true;
  }

  updatePerson() {
    this.user.id = this.apartmentsRent[0].user.id;
    this.user.username = this.apartmentsRent[0].user.username;
    this.user.password = this.apartmentsRent[0].user.password;
    this.user.firstName = this.apartmentsRent[0].user.firstName;
    this.user.lastName = this.apartmentsRent[0].user.lastName;
    this.user.phone = this.apartmentsRent[0].user.phone;
    this.user.email = this.apartmentsRent[0].user.email;
    this.user.role = this.apartmentsRent[0].user.role;
    this.userService.updateUser(this.user)
      .subscribe(value => {
        },
        error => {
          console.log(error);
        });
  }

  clearPerson() {
    this.apartmentsRent[0].user.firstName = '';
    this.apartmentsRent[0].user.lastName = '';
    this.apartmentsRent[0].user.phone = '';
    this.apartmentsRent[0].user.email = '';
  }
}
