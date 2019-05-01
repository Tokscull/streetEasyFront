import {Component, Input, OnInit} from '@angular/core';
import {ApsLocation} from '../../models/apsLocation';
import {MapService} from '../../services/map/map.service';
import {Address} from '../../models/Address';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;

  @Input() markers: Address[];

  constructor() { }

  ngOnInit() {
    this.lat = 53.904541;
    this.lng = 27.561523;
    this.zoom = 11;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }
}
