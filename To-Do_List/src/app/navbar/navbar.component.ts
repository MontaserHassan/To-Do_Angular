import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { TodosServiceService } from '../todos-service.service';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLogged: boolean = false;
  userName: string = "username";
  isClicked: boolean = false
  constructor(private _auth:AuthGuard, private _router:Router, protected _todos:TodosServiceService, protected _user:UsersService){
    this._user.user.name = this.userName;
    this._auth.isLogged$.subscribe((res) => {
      this.isLogged = res;
    });
  }

  ngOnInit(): void {}

  loginUser(){
    this.isLogged = true;
    this._user.user.image = "../../assets/Montaser.jpeg";
  };

  logOutUser(){
    this.isLogged = false;
    // this._user.user.name = "username";
    this._router.navigate(['/']);
  };

  register(){
    this.isLogged = false;
    // this._user.user.name = "username";
    this._router.navigate(['/register']);
  }

}
