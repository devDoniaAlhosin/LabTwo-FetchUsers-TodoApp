import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodoComponent } from './todo/todo.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo-list', component: TodoComponent },
  { path: '**', redirectTo: '' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
