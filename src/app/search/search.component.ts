import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel support
import { Users } from '../users-list/interfaces/users';
import userList from '../users-list/userList.json';
import { NgFor } from '@angular/common';
import { UserService } from '../users-list/user.servive';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(private userService: UserService) {}

  onSearch(event: Event): void {
    event.preventDefault();
    this.userService.setSearchTerm(this.searchTerm);
  }

  onReset(): void {
    this.searchTerm = '';
    this.userService.setSearchTerm(this.searchTerm);
  }
}
