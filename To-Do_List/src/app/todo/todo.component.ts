import { Component,Input, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit{

  @Input() todo: any;

  constructor(protected _todos:TodosServiceService, protected _user:UsersService) {
  }

  ngOnInit(): void {
    // console.log(this.todo);
  }

}
