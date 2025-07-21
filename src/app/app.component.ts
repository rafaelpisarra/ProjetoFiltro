import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user/user.interface';
import { FilterSelectOptions } from './interfaces/user/filtros/filterSelect';

import { UsersList } from './data/user-list';

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
    this.userListfiltered = this.filterUsersListe(filterOptions, this.userList);
  }


  filterUsersListe(filterOptions: FilterSelectOptions, userList: User[]): User[] {
    let filteredList: User[] = userList; 

      filteredList = this.filterUserListByName(filterOptions.name, userList);
      filteredList = this.filterUserListByStatus(filterOptions.status, filteredList);

    return filteredList;
  }
  filterUserListByStatus(status: boolean | undefined, userList: User[]): User[] {
    const STATUS_NO = status === undefined;
    if (STATUS_NO) {
      return userList;
    }
    const filteredList = userList.filter((user)=> user.ativo === status);
   return filteredList;
  }
  filterUserListByName(name: string | undefined, userList: User[]): User[] {
    const NAME_NOT_TYPED = name === undefined;
    if (NAME_NOT_TYPED) {
      return userList;
    }
    const filteredList = userList.filter((user)=>user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }


}
