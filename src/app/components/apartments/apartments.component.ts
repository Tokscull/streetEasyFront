import { Component, OnInit } from '@angular/core';
import {Apartament} from '../../models/Apartament';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  apartments: Apartament[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getAllApartments()
      .subscribe(value => {
          this.apartments = value;
        },
        error => {
          console.log(error);
        });
  }

}
