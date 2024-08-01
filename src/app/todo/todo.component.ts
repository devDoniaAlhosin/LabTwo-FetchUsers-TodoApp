import { Component } from '@angular/core';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TasksService } from '../services/tasks.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgIf, TodoInputComponent, TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  constructor(public TasksService: TasksService) {}
}
