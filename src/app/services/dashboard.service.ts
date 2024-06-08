import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor() {  }


  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getLocalStorage(key: string) {
    return localStorage.getItem(key)
  }
  clearLocalstorage() {
    localStorage.clear();
  }




}
export enum User {
  Admin = 1,
  Super
}
