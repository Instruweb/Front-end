import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "./categories.service";
import {Category} from "./category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  providers: [CategoriesService],
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  name: string = "";
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.getAllCategories();
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

}
