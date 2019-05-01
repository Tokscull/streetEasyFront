import { Component, OnInit } from '@angular/core';
import {Address} from '../../models/Address';
import {Apartment} from '../../models/Apartment';
import {AddressService} from '../../services/address/address.service';
import {ApartmentService} from '../../services/apartment/apartment.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  markers: Address[];
  apartments: Apartment[];

  constructor(private addressService: AddressService, private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.addressService.getAllAddressesSale()
      .subscribe(value => {
          this.markers = value;
        },
        error => {
          console.log(error);
        });
    this.apartmentService.getAllApartmentsSale()
      .subscribe(value => {
          this.apartments = value;
        },
        error => {
          console.log(error);
        });
  }

  onApartmentsChange(apartmentsChange: any) {
    if (apartmentsChange.type === 'getApartmentsByPriceBetween') {
      this.getApartmentsByPriceBetween(apartmentsChange.minPrice, apartmentsChange.maxPrice);
    } else if (apartmentsChange.type === 'getApartByPriceAndRoomCountBetween') {
      this.getApartByPriceAndRoomCountBetween(apartmentsChange.minPrice, apartmentsChange.maxPrice, apartmentsChange.minRoom, apartmentsChange.maxRoom);
    } else if (apartmentsChange.type === 'getApartByPriceAndRoomCountIn') {
      this.getApartByPriceAndRoomCountIn(apartmentsChange.minPrice, apartmentsChange.maxPrice, apartmentsChange.minRoom, apartmentsChange.maxRoom);
    } else if (apartmentsChange.type === 'getApartByPriceAndRoomCountIn3') {
      this.getApartByPriceAndRoomCountIn3(apartmentsChange.minPrice, apartmentsChange.maxPrice, apartmentsChange.minRoom, apartmentsChange.maxRoom, apartmentsChange.th);
    }
  }

  getApartmentsByPriceBetween(minPrice1: number, maxPrice1: number) {
    this.apartmentService.getApartmentsSaleByPriceBetween({minPrice: minPrice1, maxPrice: maxPrice1})
      .subscribe(value => {
          this.apartments = value;
          this.markers = [];
          if (this.apartments) {
            this.apartments.forEach(value1 => {
              this.markers.push(value1.address);
            });
          }
        },
        error => {
          console.log(error);
        });
  }

  getApartByPriceAndRoomCountBetween(minPrice1: number, maxPrice1: number, minRoomCount1: number, maxRoomCount1: number) {
    this.apartmentService.getApartmentsSaleByPriceBetweenAndRoomCountBetween({
      minPrice: minPrice1, maxPrice: maxPrice1,
      minRoomCount: minRoomCount1, maxRoomCount: maxRoomCount1
    })
      .subscribe(value => {
          this.apartments = value;
          this.markers = [];
          if (this.apartments) {
            this.apartments.forEach(value1 => {
              this.markers.push(value1.address);
            });
          }
        },
        error => {
          console.log(error);
        });
  }

  getApartByPriceAndRoomCountIn(minPrice1: number, maxPrice1: number, min: number, max: number) {
    this.apartmentService.getApartmentsSaleByPriceBetweenAndRoomCountIn({
      minPrice: minPrice1, maxPrice: maxPrice1,
      minRoomCount: min, maxRoomCount: max
    })
      .subscribe(value => {
          this.apartments = value;
          this.markers = [];
          if (this.apartments) {
            this.apartments.forEach(value1 => {
              this.markers.push(value1.address);
            });
          }
        },
        error => {
          console.log(error);
        });
  }

  getApartByPriceAndRoomCountIn3(minPrice1: number, maxPrice1: number, f: number, s: number, th: number) {
    this.apartmentService.getApartmentsSaleByPriceBetweenAndRoomCountIn({
      minPrice: minPrice1, maxPrice: maxPrice1,
      minRoomCount: f, maxRoomCount: s, third: th
    })
      .subscribe(value => {
          this.apartments = value;
          this.markers = [];
          if (this.apartments) {
            this.apartments.forEach(value1 => {
              this.markers.push(value1.address);
            });
          }
        },
        error => {
          console.log(error);
        });
  }

}
