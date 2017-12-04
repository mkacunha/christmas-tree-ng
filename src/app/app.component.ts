import { AppComponentService } from './app.component.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

import { User } from './user';
import { Message } from './message';
import { SelectUsersComponent } from './select-users/select-users.component';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: { '(window:keydown)': 'hotkeys($event)' }
})
export class AppComponent implements OnInit {

  userTo: User;
  nameFrom: string = '';
  message: string = '';

  error: string = '';
  success: string = '';

  @ViewChild('userTo') selectUserTo: SelectUsersComponent;

  constructor(private service: AppComponentService) {
  }

  ngOnInit() {
  }

  userToSelected(user: User) {
    this.userTo = user;
  }

  onClickSend() {
    const message: Message = new Message(this.nameFrom, this.userTo, this.message);
    this.service.save(message).subscribe(() => this.success = 'success', error => this.error = error.text());
  }

  clearFields() {
    this.userTo = new User();
    this.message = '';
    this.selectUserTo.clear();
  }

  hotkeys(event) {
    this.dimisAlert();
  }

  private dimisAlert() {
    this.error = '';
    this.success = '';
  }
}
