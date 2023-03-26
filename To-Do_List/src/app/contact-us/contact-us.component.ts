import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  isLogged: boolean= false;
  isLogged$: boolean= true;


  constructor(private _auth: AuthGuard,private _router:Router,private _user:UsersService){}

  contactUs(){
    this._auth.isLogged$.subscribe(
      (res) =>
        {
          this.isLogged = res;
          alert("thanks for your message")
          this._router.navigate(['/home']);
        }
    );
  }
}
