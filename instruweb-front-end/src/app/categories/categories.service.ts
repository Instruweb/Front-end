import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_HEADERS} from "../../url.constants";
import {Category} from "./category";
import {catchError, Observable} from "rxjs";

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {
  }

  getCategory(name: string) {
    name = name.trim();
    const url = '/api/categories/' + name;
    return this.http.get(url, API_HEADERS);
  }

  getAllCategories(): Observable<Category[]> {
    const url = '/api/categories/all';
    return this.http.get<Category[]>(url);
  }
}
