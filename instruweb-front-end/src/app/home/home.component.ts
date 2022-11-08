import {Component, OnInit} from '@angular/core';
import {Product} from "../products/product";
import {ProductsService} from "../products/products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ProductsService],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      products => (this.products = products)
    );
  }
}
