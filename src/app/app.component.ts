import { Component } from '@angular/core';

import { UsersListComponent } from './users-list/users-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    TodoComponent,
    HomeComponent,
    RouterModule,
  ],
  templateUrl: `./app.component.html`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'LabTwo';
}
