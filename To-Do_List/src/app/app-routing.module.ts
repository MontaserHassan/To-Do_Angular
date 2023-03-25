import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [

  {path : "", component : FirstPageComponent},
  {path : "contact-Us", component : ContactUsComponent},
  {path : "about-Me", component : AboutMeComponent},
  {path : "login", component : LoginComponent},
  {path : "home", component : TodosComponent},
  {path: "register", component: RegisterComponent},
  {path: '**', component: NotFoundComponent },
  {path: "404", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
