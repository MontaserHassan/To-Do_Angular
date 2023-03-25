import { Component, OnInit} from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string = "";
  quote: string = "";
  loginForm!: FormGroup;
  isLogged: boolean  = false;
  isLogged$ : boolean = true;

  constructor(private _auth:AuthGuard, private _user:UsersService, private _router:Router){
    this.loginForm = new FormGroup({
      username: new FormControl('', [ Validators.required ]),
      quote: new FormControl('', [ Validators.required ])
    })
  }
  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(() => {
      this.username = this.loginForm.value.username;
      this.quote = this.loginForm.value.quote;
      });
  }

  registerUser(){
    this._auth.isLogged$.subscribe(
      (res) =>
        {
          this.isLogged = res;
          this._router.navigate(['/register']);
        }
    );
  }

  loginUser(){
    const username = this.loginForm.value.username;
    const quote = this.loginForm.value.quote;
    this._user.addUser(username, quote);
    this._auth.change();
    this._auth.isLogged$.subscribe(
      (res) =>
        {
          this.isLogged = res;
          this._router.navigate(['/home']);
        }
    );
  }

}




// loginUser(){
//     if (this.username.trim() === '' && this.quote.trim() === '') {
//         return;
//       }
//     this._user.addUser(this.username, this.quote);
//     this._router.navigate(['/home']);
//     this._auth.change();
//     this._auth.isLogged$.subscribe((res) => {
//         this.isLogged = res;
//       });
//   }




