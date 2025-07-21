import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Input({ required: true }) userList: User [] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<User>();

  onUserSelected(user: User) {
    this.userSelectedEmitt.emit(user);
  }

}
