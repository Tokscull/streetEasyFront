import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LabelType, Options} from 'ng5-slider';
import {Apartment} from '../../models/Apartment';
import {ApartmentService} from '../../services/apartment/apartment.service';
import {Address} from '../../models/Address';



@Component({
  selector: 'app-filtr',
  templateUrl: './filtr.component.html',
  styleUrls: ['./filtr.component.scss']
})
export class FiltrComponent implements OnInit {
  @Output() apartmentsChange = new EventEmitter();
  @Input() minValue: number;
  @Input() maxValue: number;

  options: Options;
  isRoomCount1: boolean;
  isRoomCount2: boolean;
  isRoomCount3: boolean;
  isRoomCount4: boolean;

  constructor() { }

  ngOnInit() {
    this.isRoomCount1 = false;
    this.isRoomCount2 = false;
    this.isRoomCount3 = false;
    this.isRoomCount4 = false;
    this.options = {
      floor: this.minValue,
      ceil: this.maxValue,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return '<b style="color: orange">Min price: $' + value + '</b>';
          case LabelType.High:
            return '<b style="color: orange">Max price: $' + value + '</b>';
          default:
            return '$' + value;
        }
      }
    };
  }

  filter() {
    if (!this.isRoomCount1 && !this.isRoomCount2 && !this.isRoomCount3 && !this.isRoomCount4) {
      this.apartmentsChange.emit({type: 'getApartmentsByPriceBetween', minPrice: this.minValue, maxPrice: this.maxValue});
    }
    if (this.isRoomCount1) {
      if (this.isRoomCount2) {
        if (this.isRoomCount3) {
          if (this.isRoomCount4) {
            this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountBetween', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 1, maxRoom: 4 });
          } else {
            this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountBetween', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 1, maxRoom: 3 });
          }
        } else if (this.isRoomCount4) {
          this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountIn3', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 1, maxRoom: 2, th: 4 });
        } else {
          this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountBetween', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 1, maxRoom: 2 });
        }
      } else if (this.isRoomCount3) {
        if (this.isRoomCount4) {
          this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountIn3', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 1, maxRoom: 3, th: 4 });
        } else {
          this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountIn', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 1, maxRoom: 3 });
        }
      } else if (this.isRoomCount4) {
        this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountIn', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 1, maxRoom: 4 });
      } else {
        this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountBetween', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 1, maxRoom: 1 });
      }
    } else if (this.isRoomCount2) {
      if (this.isRoomCount3) {
        if (this.isRoomCount4) {
          this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountBetween', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 2, maxRoom: 4 });
        } else {
          this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountBetween', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 2, maxRoom: 3 });
        }
      } else if (this.isRoomCount4) {
        this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountIn', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 2, maxRoom: 4 });
      } else {
        this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountBetween', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 2, maxRoom: 2 });
      }
    } else if (this.isRoomCount3) {
      if (this.isRoomCount4) {
        this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountBetween', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 3, maxRoom: 4 });
      } else {
        this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountBetween', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 3, maxRoom: 3 });
      }
    } else {
      this.apartmentsChange.emit({type: 'getApartByPriceAndRoomCountBetween', minPrice: this.minValue, maxPrice: this.maxValue, minRoom: 4, maxRoom: 4 });
    }
  }


}
