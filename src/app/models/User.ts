export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
  constructor() {
    this.id = null;
    this.username = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.email = '';
    this.role = '';
  }
}
