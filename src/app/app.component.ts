import { Component } from '@angular/core';
import { User } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
userSelect: User = {} as User;
showUserDetails: boolean = false;

onUserSelected(user:User){
this.userSelect = user;
this.showUserDetails = true;
}
}
