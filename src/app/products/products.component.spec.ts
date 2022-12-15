import {getTestBed, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ProductsComponent} from "./products.component";
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from "@angular/material/legacy-autocomplete";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacySnackBarModule as MatSnackBarModule} from "@angular/material/legacy-snack-bar";
import {ProductsService} from "./products.service";
import {By} from "@angular/platform-browser";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('Products Component', () => {
  let injector: TestBed;
  let productService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatIconModule,
        MatSnackBarModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [
        ProductsComponent
      ],
      providers: [ProductsService]
    }).compileComponents();
    injector = getTestBed();
    productService = injector.get(ProductsService);
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ProductsComponent);

    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`Products should be defined`, () => {
    const fixture = TestBed.createComponent(ProductsComponent);

    const app = fixture.componentInstance;

    expect(app.productsByCategory).toBeDefined();
  });

  it('Get all products by category should contain a defined length', () => {
    // Arrange
    let products = [
      {id: 1, name: "iets", price: 350.99, image: "null", description: "null", supply: "full", main_categoryId: 1, sub_categoryId: 1},
      {id: 2, name: "iets 2", price: 350.99, image: "null", description: "null", supply: "full", main_categoryId: 1, sub_categoryId: 1},
      {id: 3, name: "iets 3", price: 350.99, image: "null", description: "null", supply: "full", main_categoryId: 1, sub_categoryId: 1}
    ]

    // Act
    const fixture = TestBed.createComponent(ProductsComponent);

    const app = fixture.componentInstance;

    app.productsByCategory = products;
    app.id = 1;

    fixture.detectChanges();

    const productList = fixture.debugElement.query(By.css('.product-list')).nativeElement as HTMLElement

    // Assert
    expect(productList.querySelectorAll('h3').length).toBe(products.length);
  });

  it('Searched product should return a product', () => {
    // Arrange
    let product = {id: 1, name: "Gevonden", price: 350.99, image: "null", description: "null", supply: "full", main_categoryId: 3, sub_categoryId: 2}

    // Act
    const fixture = TestBed.createComponent(ProductsComponent);

    const app = fixture.componentInstance;

    app.foundProduct = product;
    app.id = 1;

    fixture.detectChanges();

    const foundProduct = fixture.debugElement.query(By.css('.foundProduct')).nativeElement as HTMLElement

    // Assert
    expect(foundProduct.querySelector('h3')?.textContent).toEqual(product.name);
  });
});
