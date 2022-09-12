export class LoginPayload {
  email: string;
  password: string;
  constructor() {
    this.email = 'rsanz.works@gmail.com';
    this.password = `${new Date().getTime()}`;
  }
}
