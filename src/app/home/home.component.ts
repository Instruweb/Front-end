import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../categories/categories.service";
import {Category} from "../categories/category";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [CategoriesService],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private _snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    await this.getAllCategories();
  }

  async getAllCategories() {
    (await this.categoriesService.getAllCategories()).subscribe(
      categories => (this.categories = categories),
      error => {
        this._snackBar.open("The backend service is not available: " + error.statusText, 'OK', {
          duration: 5000,
          panelClass: ['errorSnackbar']
        });
      }
    );
  }
}
