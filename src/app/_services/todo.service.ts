import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const API = "https://jsonplaceholder.typicode.com/";

interface ITodo {
  id: number,
  userId: number,
  title: string,
  date: string|Date,
  completed: boolean
};
const INIT_TODO_STORAGE:ITodo  = {
  id:100,
  userId: 1,
  title: 'Pick up dry cleaning',
  date: new Date(),
  completed: false
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private _instance:number = 0;
private _todoStore:ITodo[] = [];

  constructor(
    private http:HttpClient
  ) {
    console.log('%cTodoService.constructor', 'background-color:black;color:white', this._instance);
    if(this._instance === 0)
      this._instance = Math.random();
    if(this._todoStore.length === 0)
      this._todoStore.push(INIT_TODO_STORAGE);
  }

  getData(): Observable<ITodo[]> {
    return of(this._todoStore);
  }
}
