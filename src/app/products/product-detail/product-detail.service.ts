import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";
import {API_HEADERS} from "../../../url.constants";

@Injectable()
export class ProductDetailService {

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    this.setHeaders().then(r => console.log(r));
  }

  async setHeaders() {
    API_HEADERS.headers = API_HEADERS.headers.set('Authorization', 'Bearer ' + await this.keycloakService.getToken());
    return "Success";
  }

  async getProductById(id: number) {
    const url = '/api/products/id/' + id;
    return this.http.get(url, API_HEADERS);
  }
}
