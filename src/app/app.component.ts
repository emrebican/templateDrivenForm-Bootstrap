/* import { Component } from '@angular/core';

interface IUser {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser;
  userList: IUser[];

  constructor() {
    this.user = {
      firstName: '',
      lastName: '',
      age: 0
    };

    this.userList = [];
  }

  handleSubmit(object: any) {
    this.userList.push(object.form.value);
    this.user = { firstName: '', lastName: '', age: 0 };
  }
} */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
}
