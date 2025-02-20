import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../../app/TodoList';
import { Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-todo-list-display',
  imports: [NgClass],
  templateUrl: './todo-list-display.component.html',
  styleUrl: './todo-list-display.component.css'
})
export class TodoListDisplayComponent {
@Input() todoTask=<Task>{};
@Input() indexTask:number=0;
completed:boolean=false;
@Input() todoList:Task[]=[];
editId:number=0;
editButtonvisibility:boolean=true;
@Output() todoListUpdated=new EventEmitter<Task[]>();

completeTask(index:number){
 this.todoList[index].completed=!this.todoList[index].completed;
 this.todoListUpdated.emit(this.todoList)
}

deleteTask(id:number){
this.todoList=this.todoList.filter((item)=>item.id!==id);
this.todoListUpdated.emit(this.todoList)
}
editTask(editId:number){
  this.editId=editId;
  this.editButtonvisibility=false;
}

saveTask(index:number,editedTaskinput:HTMLInputElement){
 if(editedTaskinput.value.trim()!=='')
 {
  this.todoList[index].task=editedTaskinput.value;
  this.editId=0;
  this.editButtonvisibility=true;
  this.todoListUpdated.emit(this.todoList)
 }
}

}
