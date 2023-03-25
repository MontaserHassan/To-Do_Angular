import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { TodosServiceService } from '../todos-service.service';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {
  isLogged!: boolean;

  constructor(private _router: Router){}
//   isLogged: boolean = true;
//   userName: string = "username";
//   constructor(private _auth:AuthGuard, private _router:Router, protected _todos:TodosServiceService, protected _user:UsersService){
//     this._user.user.name = this.userName;
//     this._auth.isLogged$.subscribe((res) => {
//       this.isLogged = res;
//     });
//   }

  loginUser(){
    this.isLogged = true;
    this._router.navigate(['/login']);  };

}
