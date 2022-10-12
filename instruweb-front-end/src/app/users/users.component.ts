import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UsersService],
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  email: string = "";

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.userService.getUser(searchTerm).subscribe(res => {
        console.log('result: ', res);
      });
    }
  }

}
