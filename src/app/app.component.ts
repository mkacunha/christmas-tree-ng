import { AppComponentService } from './app.component.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

import { User } from './user';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private users: User[] = [];

  public userFromControl: FormControl;
  public userToControl: FormControl;
  private message: Message = new Message();

  constructor(private service: AppComponentService, private builder: FormBuilder, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.service.findAllUsers().subscribe(users => this.users = users);
    this.userFromControl = new FormControl('')
    this.userToControl = new FormControl('')
  }


  private autocompleListFormatter = (data: any): SafeHtml => {
    let html = `<span>${data.name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  private onClickSend() {
    this.message.from = this.userFromControl.value;
    this.message.to = this.userToControl.value;
    console.log(this.message);
    this.service.save(this.message).subscribe(message => console.log(message), error => console.log(error));
  }

}
