export class Address {
  id: number;
  town: string;
  street: string;
  house: string;
  area: string;
  lat: number;
  lng: number;
  constructor() {
    this.id = null;
    this.town = '';
    this.street = '';
    this.house = '';
    this.area = '';
    this.lat = null;
    this.lng = null;
  }
}
