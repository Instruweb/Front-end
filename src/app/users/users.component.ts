import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UsersService],
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  loggedIn: boolean = false;
  email: string = "";

  constructor(private userService: UsersService, private keycloakservice: KeycloakService) {
  }

  async ngOnInit() {
    this.loggedIn = await this.keycloakservice.isLoggedIn();
  }

  async doLogin() {
    this.keycloakservice.login().then(r => console.log(r));
  }

  async doLogout() {
    this.keycloakservice.logout().then(r => console.log(r));
  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.userService.getUser(searchTerm).subscribe(res => {
        console.log('result: ', res);
      });
    }
  }

}
