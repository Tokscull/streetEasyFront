import { Component, OnInit } from '@angular/core';
import {MapsService} from '../../services/maps/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  lat: string;
  lng: string;
  title: string;

  location: Location;

  constructor(private map: MapsService) { }

  ngOnInit() {
    this.lat = '';
    this.lng = '';

    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.title = data.country_name;
    });
  }

}
