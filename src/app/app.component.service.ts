import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Message } from './message';
import { User } from './User';

import { environment } from '../environments/environment';

@Injectable()
export class AppComponentService {

  constructor(private http: Http) { }

  save(message: Message) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${environment.api}/messages`, message.toJson(), { headers: headers })
      .map(response => response.json() as Message);
  }

  findAllUsers() {
    return this.http.get(`${environment.api}/users`)
      .map(response => response.json() as User[]);
  }

  findUsersByNameContains(name: string) {
    return this.http.get(`${environment.api}/messages/by-name?name=${name}`)
      .map(response => response.json() as User[]);
  }
}
