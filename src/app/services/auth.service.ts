import { Injectable } from '@angular/core';
import { UserData } from '../interface/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(userData: UserData): boolean{
    localStorage.setItem('user', JSON.stringify(userData))
    return true;
  }
}
