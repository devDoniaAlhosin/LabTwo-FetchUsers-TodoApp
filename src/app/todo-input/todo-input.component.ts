import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css',
})
export class TodoInputComponent {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.getTasks();
  }

  deleteTask(id: number) {
    this.tasksService.deleteTask(id);
    this.tasks = this.tasksService.getTasks();
  }
  addTask(taskTitle: HTMLInputElement, statusTask: HTMLSelectElement): void {
    const task = taskTitle.value.trim();
    const status = statusTask.value;

    if (task && status !== 'Select Task Status') {
      this.tasksService.addTask({ task, status }); // Correct property names
      this.tasks = this.tasksService.getTasks();
      taskTitle.value = ''; // Clear input after adding the task
      statusTask.value = 'Select Task Status'; // Reset select after adding the task
    } else {
      console.error('Please enter a task and select a status.');
    }
  }
}
