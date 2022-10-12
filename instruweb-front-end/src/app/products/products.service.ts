import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_HEADERS} from "../../url.constants";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  getProduct(name: string) {
    name = name.trim();
    const url = '/api/products/' + name;
      return this.http.get(url, API_HEADERS);
  }
}
