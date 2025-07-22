import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user/user.interface';
import { FilterSelectOptions } from './interfaces/user/filtros/filterSelect';
import { UsersList } from './data/user-list';
import { filterUsersListe } from './ultils/filter-users-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userSelect: User = {} as User;
  userList: User[] = [];
  userListfiltered: User[] = [];
  showUserDetails: boolean = false;
 
  ngOnInit() {
    setTimeout(() => {
      this.userList = UsersList;
      this.userListfiltered = this.userList;
    }, 1);
  }

  onUserSelected(user: User) {
    this.userSelect = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: FilterSelectOptions) {
    this.userListfiltered = filterUsersListe(filterOptions, this.userList);
  }



 


 


}
