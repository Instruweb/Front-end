import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";
import {KeycloakService} from "keycloak-angular";
import {API_HEADERS} from "../../url.constants";

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    this.setHeaders().then(r => console.log(r));
  }

  async setHeaders() {
    if (await this.keycloakService.getToken() != undefined) {
      API_HEADERS.headers = API_HEADERS.headers.set('Authorization', 'Bearer ' + await this.keycloakService.getToken());
      return "Success";
    }
    return "Logged out";
  }

  async getProduct(name: string) {
    name = name.trim();
    const url = '/api/products/' + name;
    return this.http.get(url);
  }

  async getAllProducts(): Promise<Observable<Product[]>> {
    const url = '/api/products/all';
    return this.http.get<Product[]>(url);
  }

  getProductsByMainCategoryId(id: number): Observable<Product[]> {
    const url = '/api/products/main_category/' + id;
    return this.http.get<Product[]>(url);
  }
}
