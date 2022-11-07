import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_HEADERS} from "../../../url.constants";

@Injectable()
export class ProductDetailService {
  constructor(private http: HttpClient) {
  }

  getProductById(id: number) {
    const url = '/api/products/id/' + id;
    return this.http.get(url, API_HEADERS);
  }
}
