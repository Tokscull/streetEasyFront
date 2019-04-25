export class Apartament {
  title: string;
  description: string;
  area: string;
  price: number;
  roomCount: number;
  floor: number;
  maxFloor: number;
  visitorsCount: number;
  constructor() {
    this.title = '';
    this.description = '';
    this.area = '';
    this.price = null;
    this.roomCount = null;
    this.floor = null;
    this.maxFloor = null;
    this.visitorsCount = null;
  }
}
