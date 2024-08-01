import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from './interfaces/users';
import userList from './userList.json';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Users[] = userList;
  private filteredUsersSubject = new BehaviorSubject<Users[]>(this.users);
  filteredUsers$ = this.filteredUsersSubject.asObservable();

  private selectedUserSubject = new BehaviorSubject<Users | null>(null);
  selectedUser$ = this.selectedUserSubject.asObservable();

  constructor() {}

  setSearchTerm(term: string): void {
    if (term.trim()) {
      const filtered = this.users.filter(
        (user) =>
          user.username.toLowerCase().includes(term.toLowerCase()) ||
          user.email.toLowerCase().includes(term.toLowerCase())
      );
      this.filteredUsersSubject.next(filtered);
    } else {
      this.filteredUsersSubject.next(this.users);
    }
  }

  selectUser(user: Users): void {
    this.selectedUserSubject.next(user);
  }

  getSelectedUser(): Users | null {
    return this.selectedUserSubject.value;
  }
}
