import { AppComponentService } from './app.component.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

import { User } from './user';
import { Message } from './message';
import { Select2OptionData } from 'ng2-select2/ng2-select2.interface';
import { Select2Component } from 'ng2-select2/ng2-select2.component';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: { '(window:keydown)': 'hotkeys($event)' }
})
export class AppComponent implements OnInit {

  private userFrom: User;
  private userTo: User;
  message: string = '';

  error: string = '';
  success: string = '';

  constructor(private service: AppComponentService) {
  }

  ngOnInit() {
  }

  userFromSelected(user: User) {
    this.userFrom = user;
  }

  userToSelected(user: User) {
    this.userTo = user;
  }

  onClickSend() {
    let message: Message = new Message(this.userFrom, this.userTo, this.message);
    this.service.save(message).subscribe(() => this.success = 'success', error => this.error = error.text());
  }

  hotkeys(event) {
    this.dimisAlert();
  }

  private dimisAlert() {
    this.error = '';
    this.success = '';
  }
}
