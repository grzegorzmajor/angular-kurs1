import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  imports: [],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {
  @Output() addTodoEvent = new EventEmitter<string>();

  protected addTodo(value: string) {
    this.addTodoEvent.emit(value);
  }
}
