import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {KeycloakService} from "keycloak-angular";
import {UsersComponent} from "./users.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {UsersService} from "./users.service";

describe('CategoriesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatIconModule,
        MatToolbarModule
      ],
      declarations: [
        UsersComponent
      ],
      providers: [
        UsersService,
        {provide: KeycloakService, UsersService}
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(UsersComponent);

    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`should be logged out as default'`, () => {
    const fixture = TestBed.createComponent(UsersComponent);

    const app = fixture.componentInstance;

    expect(app.loggedIn).toEqual(false);
  });
});
