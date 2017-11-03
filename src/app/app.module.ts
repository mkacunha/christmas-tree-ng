import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { AppComponentService } from './app.component.service';

import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NguiAutoCompleteModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [AppComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
