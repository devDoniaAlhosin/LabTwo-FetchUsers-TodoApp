import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [
    // { id: 1, task: 'Do Problem Solving', status: 'Not Completed' },
    // { id: 2, task: 'Do PLaylist', status: 'Completed' },
    // { id: 3, task: 'Study Angular', status: 'Not Completed' },
  ];
  getTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  addTask(task: Omit<Task, 'id'>) {
    const newTask: Task = { ...task, id: this.tasks.length + 1 };
    this.tasks.push(newTask);
  }

  constructor() {}
}
