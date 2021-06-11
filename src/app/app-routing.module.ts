import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListingComponent } from './todo-listing/todo-listing.component';
import { TodoListitemComponent } from './todo-listitem/todo-listitem.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'todo-listing',
    component: TodoListingComponent
  },
  {
    path: 'todo-item',
    component: TodoListitemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
