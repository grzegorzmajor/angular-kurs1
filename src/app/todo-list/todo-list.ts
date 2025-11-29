import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {

  todos: string[] = [];

  addTodo(value: string) {
    if (value.length < 5) {
      alert('Zadanie musi mieć co najmniej 5 znaków');
      return;
    }
    this.todos.push(value);
  }
}
