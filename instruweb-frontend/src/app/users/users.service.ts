import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient) {}

  getUser(emailaddress: string) {
    emailaddress = emailaddress.trim();
    const url = 'http://localhost:8080/api/users/' + emailaddress;
    return this.http.get(url);
  }
}
