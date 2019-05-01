import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApartmentService} from '../../services/apartment/apartment.service';
import {Apartment} from '../../models/Apartment';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/User';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-update-apart',
  templateUrl: './update-apart.component.html',
  styleUrls: ['./update-apart.component.scss']
})
export class UpdateApartComponent implements OnInit {
  apartment: Apartment;
  user: User;
  type: string;

  constructor(private route: ActivatedRoute, private apartmentService: ApartmentService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    // @ts-ignore
    this.type = this.route.params._value.type;
    this.user = new User();
    this.apartment = new Apartment();
    if (this.type === 'rent') {
      // @ts-ignore
      this.apartmentService.getApartmentById(+this.route.params._value.id)
        .subscribe(res => {
            this.apartment = res;
          },
          error1 => {
            console.log(error1);
          });
    }
    if (this.type === 'sale') {
      // @ts-ignore
      this.apartmentService.getApartmentSaleById(+this.route.params._value.id)
        .subscribe(res => {
            this.apartment = res;
          },
          error1 => {
            console.log(error1);
          });
    }
  }

  clear() {
    this.apartment.user.firstName = '';
    this.apartment.user.lastName = '';
    this.apartment.user.phone = '';
    this.apartment.user.email = '';
    this.apartment.title = '';
    this.apartment.description = '';
    this.apartment.roomCount = null;
    this.apartment.floor = null;
    this.apartment.maxFloor = null;
    this.apartment.price = null;
    this.apartment.address.town = '';
    this.apartment.address.area = '';
    this.apartment.address.street = '';
    this.apartment.address.house = '';
  }

  update() {
    this.user.id = this.apartment.user.id;
    this.user.username = this.apartment.user.username;
    this.user.password = this.apartment.user.password;
    this.user.firstName = this.apartment.user.firstName;
    this.user.lastName = this.apartment.user.lastName;
    this.user.phone = this.apartment.user.phone;
    this.user.email = this.apartment.user.email;
    this.user.role = this.apartment.user.role;
    this.userService.updateUser(this.user)
      .subscribe(value => {
        },
        error => {
          console.log(error);
        });

    this.apartment.user = this.user;
    if (this.type === 'rent') {
      this.apartmentService.updateApartment(this.apartment)
        .subscribe(res => {
            this.router.navigateByUrl('/apart/' + this.type + '/' + this.apartment.id);
          },
          error1 => {
            console.log(error1);
          });
    }
    if (this.type === 'sale') {
      this.apartmentService.updateApartmentSale(this.apartment)
        .subscribe(res => {
            this.router.navigateByUrl('/apart/' + this.type + '/' + this.apartment.id);
          },
          error1 => {
            console.log(error1);
          });
    }
  }
}
