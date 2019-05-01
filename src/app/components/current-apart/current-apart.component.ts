import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Apartment} from '../../models/Apartment';
import {ApartmentService} from '../../services/apartment/apartment.service';
import {Address} from '../../models/Address';
import {User} from '../../models/User';
import {HttpClient} from '@angular/common/http';
import {log} from 'util';

@Component({
  selector: 'app-current-apart',
  templateUrl: './current-apart.component.html',
  styleUrls: ['./current-apart.component.scss']
})
export class CurrentApartComponent implements OnInit {
  type: string;
  apartment: Apartment;
  markers: Address[];
  isEdit: boolean;
  user: User;

  constructor(private route: ActivatedRoute, private apartmentService: ApartmentService, private router: Router) {
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
            this.markers = [res.address];
            if (this.apartment.user.id === JSON.parse(localStorage.getItem('currentUser')).principal.id) {
              this.isEdit = true;
            } else {
              this.isEdit = false;
            }
          },
          error1 => {
            console.log(error1);
          });
    }
    // @ts-ignore
    if (this.type === 'sale') {
      // @ts-ignore
      this.apartmentService.getApartmentSaleById(+this.route.params._value.id)
        .subscribe(res => {
            this.apartment = res;
            this.markers = [res.address];
            if (this.apartment.user.id === JSON.parse(localStorage.getItem('currentUser')).principal.id) {
              this.isEdit = true;
            } else {
              this.isEdit = false;
            }
          },
          error1 => {
            console.log(error1);
          });
    }
  }

  deleteApart() {
    if (this.type === 'rent') {
      this.apartment.user = this.user;
      this.apartmentService.deleteApartRent(this.apartment)
        .subscribe(res => {
            this.router.navigateByUrl('/rent');
          },
          error1 => {
            console.log(error1);
          });
    }
    if (this.type === 'sale') {
      this.apartment.user = this.user;
      this.apartmentService.deleteApartSale(this.apartment)
        .subscribe(res => {
            this.router.navigateByUrl('/rent');
          },
          error1 => {
            console.log(error1);
          });
    }
  }

  sendMessage() {
    console.log('here');
    window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=' + this.apartment.user.email +
      '&su=' + this.apartment.title + '&tf=1', '_blank');
  }
}
