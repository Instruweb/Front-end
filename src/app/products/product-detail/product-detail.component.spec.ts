import {getTestBed, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ProductDetailComponent} from "./product-detail.component";
import {MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";
import {MatLegacySnackBarModule as MatSnackBarModule} from "@angular/material/legacy-snack-bar";
import {ProductDetailService} from "./product-detail.service";
import {By} from "@angular/platform-browser";

describe('Product Detail Component', () => {
  let injector: TestBed;
  let productDetailService: ProductDetailService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatTabsModule,
        MatSnackBarModule
      ],
      declarations: [
        ProductDetailComponent
      ],
      providers: [ProductDetailService]
    }).compileComponents();
    injector = getTestBed();
    productDetailService = injector.get(ProductDetailService);
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ProductDetailComponent);

    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`Product should be empty`, () => {
    const fixture = TestBed.createComponent(ProductDetailComponent);

    const app = fixture.componentInstance;

    expect(app.product).toBeUndefined()
  });

  it('There should be a number of related products on the page', () => {
    // Arrange
    let products = [
      {id: 1, name: "iets", price: 350.99, image: "null", description: "null", supply: "full", main_categoryId: 1, sub_categoryId: 1},
      {id: 2, name: "iets 2", price: 350.99, image: "null", description: "null", supply: "full", main_categoryId: 1, sub_categoryId: 1},
      {id: 3, name: "iets 3", price: 350.99, image: "null", description: "null", supply: "full", main_categoryId: 1, sub_categoryId: 1}
    ]
    let product = {id: 4, name: "Gevonden", price: 350.99, image: "null", description: "null", supply: "full", main_categoryId: 3, sub_categoryId: 2}

    // Act
    const fixture = TestBed.createComponent(ProductDetailComponent);

    const app = fixture.componentInstance;

    app.productsByMainCategory = products;
    app.product = product;
    app.id = 4;

    fixture.detectChanges();

    const relatedProductList = fixture.debugElement.query(By.css('.relatedProducts')).nativeElement as HTMLElement

    // Assert
    expect(relatedProductList.querySelectorAll('h3').length).toBe(products.length);
  });

  it('There should be one product on the page', () => {
    // Arrange
    let product = {id: 1, name: "Gevonden", price: 350.99, image: "null", description: "null", supply: "full", main_categoryId: 3, sub_categoryId: 2}

    // Act
    const fixture = TestBed.createComponent(ProductDetailComponent);

    const app = fixture.componentInstance;

    app.product = product;
    app.id = 1;

    fixture.detectChanges();

    const theProduct = fixture.debugElement.query(By.css('.product')).nativeElement as HTMLElement;

    // Assert
    expect(theProduct.querySelector('h1')?.textContent).toEqual(product.name);
  });
});
