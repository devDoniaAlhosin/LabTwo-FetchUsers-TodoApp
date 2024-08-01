import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, UsersListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
