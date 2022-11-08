import {Component, OnInit} from '@angular/core';
import {ProductDetailService} from "./product-detail.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailService],
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  errorMessage: string = "";
  id: number = 0;
  product: Product | undefined;

  constructor(
    private productDetailService: ProductDetailService,
    private _ActivatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params: { [x: string]: string | number; }) => {
      this.id = +params['id'];
    });
    this.getProductById(this.id);
  }

  getProductById(id: number): void {
    this.productDetailService.getProductById(id)
      .subscribe(res => {
          this.product = <Product>res;
          this.errorMessage = "";
        },
        error => {
          this.errorMessage = "ERROR: " + error.statusText;
          this.product = undefined;
        }
      )
  }
}
