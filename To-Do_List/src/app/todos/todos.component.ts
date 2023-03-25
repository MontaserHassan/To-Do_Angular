import { Component } from '@angular/core';
import { ToDo } from '../model/Todo';
import { TodosServiceService } from '../todos-service.service';
import { UsersService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: ToDo[] = this._todos.todos;

  constructor(protected _todos:TodosServiceService, protected _user:UsersService) {
    // this.todos = this._todos.todos;
  }

  // constructor(protected _todos:TodosServiceService, _http:HttpClient, protected _user:UsersService) {
  //   this._todos.getAllTodos().subscribe((res :any) => this._todos.todos = res.todos);
  // };

}
