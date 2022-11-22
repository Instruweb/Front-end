import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductDetailService {

  constructor(private http: HttpClient) {
  }

  async getProductById(id: number) {
    const url = '/api/products/id/' + id;
    return this.http.get(url);
  }
}
