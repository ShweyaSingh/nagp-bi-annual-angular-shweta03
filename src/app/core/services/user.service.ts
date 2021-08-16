import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = './assets/template';
  private allUsers: User[] = [];

  constructor(private httpClient: HttpClient) {
    this.getAll();
  }

  public getAll() {
    return this.httpClient
      .get(`${this.apiUrl}/users.json`)
      .subscribe((users) => {
        this.allUsers = users as User[];
        return this.allUsers;
      });
  }

  public login(email: string, password: string, isAdmin: boolean): boolean {
    const userExist = this.allUsers.find(
      (u) =>
        u.email === email && u.password === password && u.isAdmin === isAdmin
    );
    if (userExist) {
      localStorage.setItem('currentUser', email + '-' + password);
      localStorage;
    }
    return userExist ? true : false;
  }
}
