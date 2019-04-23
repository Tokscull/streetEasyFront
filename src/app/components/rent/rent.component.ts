import { Component, OnInit } from '@angular/core';
import {Apartament} from '../../models/Apartament';
import {HttpService} from '../../services/http/http.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  title = 'Rent';
  apartments: Apartament[];

  constructor(private httpService: HttpService) {
  }

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
