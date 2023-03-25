import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild("myForm")form!: NgForm;
  isLogged: boolean  = false;
  isLogged$ : boolean = true;

  emailDefaultValue:string = "user@gmail.com";

  constructor(private _auth: AuthGuard,private _router: Router) {
  }

  signUpTemplate(){
    this._router.navigate(['/']);
  }

}

