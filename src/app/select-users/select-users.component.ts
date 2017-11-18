import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppComponentService } from '../app.component.service';

import { User } from './../user';

@Component({
  selector: 'select-users',
  templateUrl: './select-users.component.html',
  styleUrls: ['./select-users.component.css'],
  host: { '(window:keydown)': 'hotkeys($event)' }
})
export class SelectUsersComponent implements OnInit {

  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Output() selected: EventEmitter<User> = new EventEmitter();

  private users: User[] = [];
  private userName: string = '';
  private isSelected: boolean = false;

  private inputSelect;
  private elements;
  private indexSelected = 0;
  private isNavegate = false;

  constructor(private service: AppComponentService) { }

  ngOnInit() {

  }

  private onNameChange(name) {
    if (name.length >= 3) {
      this.service
        .findUsersByNameContains(name)
        .debounceTime(1000)
        .distinctUntilChanged()
        .subscribe(users => this.users = users);
    } else {
      this.users = [];
    }

    if (this.isSelected) {
      this.isSelected = false;
      this.selected.next(null);
    }
  }

  private userOnClick(user: User) {
    this.selected.next(user);
    this.userName = user.name;
    this.users = [];
    this.isSelected = true;
  }

  hotkeys(event) {
    if (this.users.length > 0 && (event.code === 'ArrowDown' || event.code === 'ArrowUp')) {
      event.preventDefault();      
      if (this.isInputSelect()) {
        this.inputSelect = document.activeElement;
        this.indexSelected = 0;
        this.elements = document.getElementsByClassName('user-select');
        this.isNavegate = true;
        this.elements[this.indexSelected].focus();
      } else if (this.isNavegate && event.code === 'ArrowDown') {
        if ((this.indexSelected + 1) < this.elements.length) {
          this.indexSelected++;
        }
        this.elements[this.indexSelected].focus();
      } else if (this.isNavegate && event.code === 'ArrowUp') {
        if (this.indexSelected > 0) {
          this.indexSelected--;
          this.elements[this.indexSelected].focus();
        } else {
          this.inputSelect.focus();
        }
      }
    }
  }

  private isInputSelect(): boolean {
    return document.activeElement &&
      document.activeElement.attributes.getNamedItem('ng-reflect-name') != undefined &&
      document.activeElement.attributes.getNamedItem('ng-reflect-name').value === this.name;
  }

}
