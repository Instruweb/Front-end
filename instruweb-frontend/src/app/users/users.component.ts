import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import {User} from "./user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UsersService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User[] = [];
  email: string = "";

  constructor(private userService: UsersService) {}

  ngOnInit(): void { }

  search(searchTerm: string) {
    if (searchTerm) {
      this.userService
        .getUser(searchTerm).subscribe(res => {console.log('res: ', res)});
    }
  }
}
