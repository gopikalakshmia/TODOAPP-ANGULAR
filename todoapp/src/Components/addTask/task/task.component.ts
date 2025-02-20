import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../app/TodoList';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [NgIf,FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  newTask:string="";
  error:boolean=false;
  todoList!:Task;
@Output() newTodoVal=new EventEmitter<string>();
  addTask(){
    if(this.newTask.trim()!=="")
    {

      this.error=false;
      this.newTodoVal.emit(this.newTask);
    }
    else{
    this.error=true;
    }
    this.newTask="";
    }
}
