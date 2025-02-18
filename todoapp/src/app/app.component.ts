import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';
export interface Task{
  id:number;
  task:string;
  completed:boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgFor,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

newTask:string="";
completed:boolean=false;
todoList:Task[]=[];
editId:number=0;
addTask(){
  console.log("buttopn");
if(this.newTask.trim()!=="")
{
  console.log("no task");
  this.todoList.push({id:Math.floor(Math.random()*100+1),task:this.newTask,completed:false});
}
console.log(this.todoList);
this.newTask="";
}

completeTask(index:number){
 this.todoList[index].completed=!this.todoList[index].completed;
 console.log(this.todoList[index])
}

deleteTask(id:number){
this.todoList=this.todoList.filter((item)=>item.id!==id);
}
editTask(editId:number){
  console.log("edit task");
  this.editId=editId;
}
}
