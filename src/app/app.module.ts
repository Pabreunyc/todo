import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoListingComponent } from './todo-listing/todo-listing.component';
import { TodoListitemComponent } from './todo-listitem/todo-listitem.component';
import { TodoMainComponent } from './todo-main/todo-main.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,    
    TodoListingComponent,
    TodoListitemComponent,
    TodoMainComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
