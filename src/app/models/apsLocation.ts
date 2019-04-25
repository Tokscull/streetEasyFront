export class ApsLocation {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
  constructor() {
    this.lat = null;
    this.lng = null;
    this.label = '';
    this.draggable = false;
  }
}
