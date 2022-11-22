import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ProductDetailComponent} from "./product-detail.component";
import {MatTabsModule} from "@angular/material/tabs";

describe('Product Detail Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatTabsModule
      ],
      declarations: [
        ProductDetailComponent
      ],
      providers: []
    }).compileComponents();
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
});
