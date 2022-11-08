import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_HEADERS} from "../../url.constants";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  getProduct(name: string) {
    name = name.trim();
    const url = '/api/products/' + name;
      return this.http.get(url, API_HEADERS);
  }

  getAllProducts(): Observable<Product[]> {
    const url = '/api/products/all';
    return this.http.get<Product[]>(url);
  }

  getProductsByMainCategoryId(id: number): Observable<Product[]> {
    const url = '/api/products/main_category/' + id;
    return this.http.get<Product[]>(url, API_HEADERS);
  }
}
