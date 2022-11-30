import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ProductsComponent} from "./products.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('Products Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatIconModule,
        MatSnackBarModule
      ],
      declarations: [
        ProductsComponent
      ],
      providers: []
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ProductsComponent);

    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`Products should be defined`, () => {
    const fixture = TestBed.createComponent(ProductsComponent);

    const app = fixture.componentInstance;

    expect(app.productsByCategory).toBeDefined()
  });
});
