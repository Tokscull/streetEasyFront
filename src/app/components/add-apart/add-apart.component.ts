import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {Address} from '../../models/Address';
import {MapService} from '../../services/map/map.service';
import {Apartment} from '../../models/Apartment';
import {ApartmentService} from '../../services/apartment/apartment.service';
import {UserService} from '../../services/user/user.service';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-apart',
  templateUrl: './add-apart.component.html',
  styleUrls: ['./add-apart.component.scss']
})
export class AddApartComponent implements OnInit {
  addType: string;
  isShowPerson: boolean;
  isShowAddress: boolean;
  isShowApart: boolean;
  isShowPhoto: boolean;
  principal: User;
  user: User;
  address: Address;
  markers: Address[];
  apartment: Apartment;
  files: File[];

  percentDone: number;
  uploadSuccess: boolean;

  constructor(private userService: UserService, private apartmentService: ApartmentService, private map: MapService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.principal = JSON.parse(localStorage.getItem('currentUser')).principal;
    this.user = new User();
    this.user.id = this.principal.id;
    this.user.username = this.principal.username;
    this.user.password = this.principal.password;
    this.user.firstName = this.principal.firstName;
    this.user.lastName = this.principal.lastName;
    this.user.phone = this.principal.phone;
    this.user.email = this.principal.email;
    this.user.role = this.principal.role;
    this.isShowPerson = false;
    this.isShowAddress = false;
    this.isShowApart = false;
    this.address = new Address();
    this.apartment = new Apartment();
  }

  showUserForm(info: string) {
    if (this.principal === null) {
      document.getElementById('openModalButton').click();
    } else {
      this.isShowPerson = true;
      this.addType = info;
    }
  }

  updatePerson() {
    this.userService.updateUser(this.user)
      .subscribe(value => {
          this.isShowPerson = false;
          this.isShowAddress = true;
        },
        error => {
          console.log(error);
        });
  }

  clearPerson() {
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.phone = '';
    this.user.email = '';
  }

  goToPersonInfo() {
    this.isShowAddress = false;
    this.isShowPerson = true;
  }

  getLocation() {
    this.map.getLocation(this.address.town + this.address.street + this.address.house)
      .subscribe(results => {
          this.address.lat = results.results[0].geometry.location.lat;
          this.address.lng = results.results[0].geometry.location.lng;
        },
        error => {
          console.log('error');
        });
  }

  goToApInfo() {
    this.isShowAddress = false;
    this.isShowApart = true;
  }

  goToAddress() {
    this.isShowApart = false;
    this.isShowAddress = true;
  }

  insertApart() {
    this.apartment.address = this.address;
    this.apartment.user = this.user;
    if (this.addType === 'rent') {
      this.apartmentService.insertApartment(this.apartment)
        .subscribe(results => {
          },
          error => {
            console.log('error');
          });
    } else {
      this.apartmentService.insertApartmentSale(this.apartment)
        .subscribe(results => {
          },
          error => {
            console.log('error');
          });
    }
    this.isShowApart = false;
    this.isShowPhoto = true;
  }

  goToApart() {
    this.isShowPhoto = false;
    this.isShowApart = true;
  }

  addressChangeListener() {
    this.getLocation();
    this.markers = [this.address];
  }

  upload(files: File[]) {
    this.files = files;
    // pick from one of the 4 styles of file uploads below
  }

  addImg() {
    console.log(this.files);
    const formData = new FormData();
    Array.from(this.files).forEach(f => formData.append('file', f));

    this.http.post('http://localhost:8080/apartments/uploadImg', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      });

    this.router.navigateByUrl('/account');
  }
}
