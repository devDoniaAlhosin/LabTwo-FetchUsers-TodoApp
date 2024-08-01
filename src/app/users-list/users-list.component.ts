import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import userList from './userList.json';
import { Users } from './interfaces/users';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { UserService } from './user.servive';
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgClass, NgIf],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faStar = faStar;
  filteredUsers: Users[] = [];
  selectedUser: Users | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.filteredUsers$.subscribe((users) => {
      this.filteredUsers = users;
    });

    this.userService.selectedUser$.subscribe((user) => {
      this.selectedUser = user;
    });
  }

  onUserClick(user: Users): void {
    this.userService.selectUser(user);
  }

  trackById(index: number, user: Users): number {
    return user.id;
  }
}
