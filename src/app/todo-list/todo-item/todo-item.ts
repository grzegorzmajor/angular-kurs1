import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../shared/interfaces/todo.interface';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [
    NgClass
  ],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo!: Todo;
  @Input() index!: number;
  @Output() todoStatusChanged = new EventEmitter<number>();
  @Output() todoDeleted = new EventEmitter<number>();

  protected changeTodoStatus(index: number) {
    this.todoStatusChanged.emit(index);
  }

  protected deleteTodo(index: number) {
    this.todoDeleted.emit(index);
  }
}
