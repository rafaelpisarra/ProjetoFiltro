import { Component, EventEmitter, Output } from '@angular/core';
import { UsersList } from 'src/app/data/user-list';
import { User } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  userList: User[]=UsersList;
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Output('userSelected')userSelectedEmitt = new EventEmitter<User>();

  onUserSelected(user: User){
    this.userSelectedEmitt.emit(user);
  }

}
