import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-listitem',
  templateUrl: './todo-listitem.component.html',
  styleUrls: ['./todo-listitem.component.css']
})
export class TodoListitemComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('%cTodoListItemComponent', 'background-color:green;color:white');
  }
  ngOnDestroy(): void {
    console.log('%cTodoListItemComponent', 'background-color:red;color:white');
  }
// ============================================================================
}
