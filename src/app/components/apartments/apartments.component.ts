import {Component, Input, OnInit} from '@angular/core';
import {Apartment} from '../../models/Apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  @Input() apartments: Apartment[];
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }
}
