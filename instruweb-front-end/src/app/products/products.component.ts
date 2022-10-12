import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [ProductsService],
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  name: string = "";

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
  }

  searchProduct(term: string) {
    if (term) {
      this.productsService.getProduct(term).subscribe(res => {
        console.log('product: ', res)
      });
    }
  }

}
