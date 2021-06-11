import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('%cTodoComponent', 'background-color:green;color:white');
  }
  ngOnDestroy(): void {
    console.log('%cTodoComponent', 'background-color:red;color:white');    
  }
// ============================================================================
}
