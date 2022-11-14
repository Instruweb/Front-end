import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_HEADERS} from "../../url.constants";
import {Observable} from "rxjs";
import {Product} from "./product";
import {KeycloakService} from "keycloak-angular";

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      Authorization: ''
    }
  )
}

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {
  }

  async getProduct(name: string) {
    httpOptions.headers = httpOptions.headers.set('Authorization', await this.keycloakService.getToken())
    console.log(httpOptions.headers)
    name = name.trim();
    const url = '/api/products/' + name;
    return this.http.get(url, httpOptions);
  }

  async getAllProducts(): Promise<Observable<Product[]>> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + await this.keycloakService.getToken())
    // httpOptions.headers = httpOptions.headers.set('Authorization', await this.keycloakService.getToken())
    console.log(httpOptions.headers)
    const url = '/api/products/all';
    // const url = '/api/products/all';
    return this.http.get<Product[]>(url, httpOptions);
  }

  getProductsByMainCategoryId(id: number): Observable<Product[]> {
    const url = '/api/products/main_category/' + id;
    return this.http.get<Product[]>(url, API_HEADERS);
  }
}
