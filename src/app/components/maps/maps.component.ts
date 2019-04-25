import { Component, OnInit } from '@angular/core';
import {ApsLocation} from '../../models/apsLocation';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;
  title: string;

  constructor() { }

  ngOnInit() {
    // initial center position for the map
    this.lat = 53.904541;
    this.lng = 27.561523;
    // google maps zoom level
    this.zoom = 11;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }



  markers: ApsLocation[] = [
    {
      lat: 53.906523,
      lng: 27.524216,
      label: 'A',
      draggable: false
    },
    {
      lat: 53.883176,
      lng: 27.601846,
      label: 'B',
      draggable: false
    },
    {
      lat: 53.904621,
      lng: 27.548998,
      label: 'C',
      draggable: false
    }
  ];
}
