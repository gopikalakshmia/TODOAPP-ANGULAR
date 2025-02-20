import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../Components/header/header/header.component';
import { TaskComponent } from '../Components/addTask/task/task.component';
import { Task } from './TodoList';
import { TodoListDisplayComponent } from '../Components/taskDisplay/todo-list-display/todo-list-display.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgFor,NgClass,HeaderComponent,NgIf,TaskComponent,TodoListDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todoList:Task[]=[];
addTask(newTask:string){
  this.todoList.push({id:Math.floor(Math.random()*100+1),task:newTask,completed:false});
}

updateTodoList(updatedTodoList:Task[]){
  this.todoList=updatedTodoList;
}
}
