import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE_URL} from "../../url.constants";

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUser(emailaddress: string) {
    emailaddress = emailaddress.trim();
    const url = API_BASE_URL + '/api/users/' + emailaddress;
    return this.http.get(url);
  }
}
