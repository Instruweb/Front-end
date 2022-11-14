import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "./categories.service";
import {Category} from "./category";
import {KeycloakService} from "keycloak-angular";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  providers: [CategoriesService],
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  hide: boolean = true;
  loggedIn: boolean = false;
  name: string = "";
  categories: Category[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private keycloakService: KeycloakService,
    private router: Router
  ) {
  }

  async ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
    this.getAllCategories();
    this.loggedIn = await this.keycloakService.isLoggedIn();
  }

  show() {
    this.hide = !this.hide;
  }

  async doLogin() {
    this.keycloakService.login().then(r => console.log(r));
  }

  getAllCategories(): void {
    this.categoriesService.getAllCategories().subscribe(
      categories => (this.categories = categories)
    );
  }

  searchCategory(term: string) {
    if (term) {
      this.categoriesService.getCategory(term).subscribe(res => {
        console.log('category: ', res)
      });
    }
  }

  refresh(): void {
    window.location.reload();
  }
}
