import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoListitemComponent } from '../todo-listitem/todo-listitem.component';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-todo-listing',
  templateUrl: './todo-listing.component.html',
  styleUrls: ['./todo-listing.component.css']
})
export class TodoListingComponent implements OnInit, OnDestroy {
public timeStamp:string = '';

  constructor(private todoService:TodoService) {

  }
  ngOnInit(): void {
    console.log('%cTodoListitemComponent', 'background-color:green;color:white');
    this._init();
  }
  ngOnDestroy(): void {
    console.log('%cTodoListitemComponent', 'background-color:red;color:white');    
  }

  // ==========================================================================
  private _init() {
    this.timeStamp = new Date().toLocaleDateString();

    this.todoService.getData().subscribe(
      (d) => {
        console.log('_init', d);
      },
      (err) => {
        console.log('getData.ERR', err);
      },
      () => { console.log('getData.COMPLETE'); }
    );
  }

}
