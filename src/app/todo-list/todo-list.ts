import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import {CommonModule} from '@angular/common';
import {Alert} from '../shared/component/alert/alert';
import {AddTodo} from './add-todo/add-todo';
import {TodoItem} from './todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
  imports: [
    CommonModule,
    Alert,
    AddTodo,
    TodoItem
  ]
})
export class TodoList {

  todos: Todo[] = [];

  errorMessage = '';

  addErrorMessage(message: string) {
    this.errorMessage = message;
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  addTodo(value: string) {
    if (value.length < 5) {
      this.addErrorMessage('Zadanie musi mieć co najmniej 5 znaków');
      return;
    }
    this.todos.push({ name: value, isComplete: false });
  }
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
  changeTodoStatus(index: number) {
    this.todos[index].isComplete = !this.todos[index].isComplete;
  }
  completeTodo(index: number) {
    this.todos[index].isComplete = true;
  }
}
