import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  user: User = {
    name: '',
    favQuote: '',
    image: '',
    loggedTime: ''
  };

  constructor() {}

  addUser(name: string, favQuote: string) {
    this.user.name = name;
    this.user.favQuote = favQuote;
    this.user.image = "";
    this.user.loggedTime = new Date().toLocaleTimeString();
  }
}

interface User {
  name: string;
  image: string;
  favQuote: string;
  loggedTime: string;
}
