import {Address} from './Address';
import {User} from './User';

export class Apartment {
  id: number;
  title: string;
  description: string;
  roomCount: number;
  floor: number;
  maxFloor: number;
  price: number;
  visitorsCount: number;
  address: Address;
  user: User;
  constructor() {
    this.id = null;
    this.title = '';
    this.description = '';
    this.roomCount = null;
    this.floor = null;
    this.maxFloor = null;
    this.price = null;
    this.visitorsCount = null;
    this.address = new Address();
    this.user = new User();
  }
}
