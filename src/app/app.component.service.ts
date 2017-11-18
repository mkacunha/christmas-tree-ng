import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Message } from './message';
import { User } from './User';

@Injectable()
export class AppComponentService {

  constructor(private http: Http) { }

  save(message: Message) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/messages', message.toJson(), { headers: headers })
      .map(response => response.json() as Message);
  }

  findAllUsers() {
    return this.http.get('http://localhost:8080/users')
      .map(response => response.json() as User[]);
  }

  findUsersByNameContains(name: string) {
    return this.http.get(`http://localhost:8080/users/contains/${name}`)
      .map(response => response.json() as User[]);
  }
}
