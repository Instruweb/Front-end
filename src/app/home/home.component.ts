import {Component, OnInit} from '@angular/core';
import {Product} from "../products/product";
import {ProductsService} from "../products/products.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ProductsService],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService, private keycloackservice: KeycloakService) {
  }

  async ngOnInit() {
    await this.getAllProducts();
    console.log(this.keycloackservice.getToken())
  }

  async getAllProducts() {
    (await this.productService.getAllProducts()).subscribe(
      products => (this.products = products)
    );
  }
}
