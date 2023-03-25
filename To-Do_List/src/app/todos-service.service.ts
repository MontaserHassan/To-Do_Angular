import { Injectable } from '@angular/core';
import { ToDo } from './model/Todo';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  todos: any = [];
  task!: ToDo;
  favoriteTodo: ToDo[] = [];
  deletedTodo: ToDo[] = [];
  todo: string = "";
  fav:boolean = true

  constructor(private _http:HttpClient, private _router:Router) {
    this.getAllTodos().subscribe((res: any) => {
      this.todos = res.todos;
    });
  }

  addTodo(){
    if (this.todos){
      const todo : ToDo = {
        id : this.todos.length + 1,
        todo : this.todo,
        completed : false,
        fav: false,
        deleted: false
      };
      this.todos.push(todo);
      this.todo = "";
    }
    else{
      alert('Please enter a todo');
    }
  }

  isCompleted(todo: ToDo) {
    todo.completed = !todo.completed;
  }

  getCompletedPercentage(): number {
    let completed = 0;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed) {
        completed++;
      }
    }
    let delPercentage = Math.round((completed / this.todos.length) * 100).toFixed(0);
    return parseFloat(delPercentage);
  }

  deleteTodo(todo:ToDo){
    const index = this.todos.indexOf(todo);
    todo.deleted = !todo.deleted;
    if (index !== -1) {
      this.deletedTodo.push(this.todos.splice(index, 1)[0]);
    }
  }

  getDeletedPercentage(): number{
    let deleted = 0;
    for (let i = 0; i < this.deletedTodo.length; i++) {
      if (this.deletedTodo[i].deleted) {
        deleted++;
      }
    }
    return Math.round(deleted);
  }

  addFavoriteTodo(todo:ToDo){
      todo.fav = !todo.fav;
      // this.fav = false;
      this.favoriteTodo.push(todo);
  }

  getFavoritePercentage(): number{
    let favorite = 0;
    for (let i = 0; i < this.todos.length; i++) {
      if (!this.todos[i].fav) {
        favorite++;
      } else if(this.todos[i].fav) {
        favorite--;
      };
    }
    let favPercentage = Math.round((favorite / this.todos.length) * 100).toFixed(0);
    return parseFloat(favPercentage);
  }

  getAllTodos(){
    return this._http.get('https://dummyjson.com/todos')
  }

}
