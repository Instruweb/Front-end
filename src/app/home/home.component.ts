import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../categories/categories.service";
import {Category} from "../categories/category";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [CategoriesService],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {
  }

  async ngOnInit() {
    await this.getAllCategories();
  }

  async getAllCategories() {
    (await this.categoriesService.getAllCategories()).subscribe(
      categories => (this.categories = categories)
    );
  }
}
