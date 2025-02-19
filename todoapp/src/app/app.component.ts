import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../Components/header/header/header.component';
export interface Task{
  id:number;
  task:string;
  completed:boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgFor,NgClass,HeaderComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

newTask:string="";
completed:boolean=false;
todoList:Task[]=[];
editId:number=0;
editedTaskValue:string='';
error:boolean=false;
editButtonvisibility:boolean=true;



addTask(){
if(this.newTask.trim()!=="")
{
  this.todoList.push({id:Math.floor(Math.random()*100+1),task:this.newTask,completed:false});
  this.error=false;
}
else{
this.error=true;
}
this.newTask="";
}

completeTask(index:number){
 this.todoList[index].completed=!this.todoList[index].completed;
}

deleteTask(id:number){
this.todoList=this.todoList.filter((item)=>item.id!==id);
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
 }
}
}
