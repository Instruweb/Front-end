import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_BASE_URL} from "../../url.constants";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  getProduct(name: string) {
    name = name.trim();
    const url = API_BASE_URL + '/api/products/' + name;
    return this.http.get(url);
  }
}
