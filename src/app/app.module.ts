import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponentService } from './app.component.service';

import { AppComponent } from './app.component';
import { SelectUsersComponent } from './select-users/select-users.component';

import { Select2Module } from 'ng2-select2';



import 'rxjs/add/operator/map';
import 'rxjs/add/observable/timer';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@NgModule({
  declarations: [
    AppComponent,
    SelectUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Select2Module
  ],
  providers: [AppComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
