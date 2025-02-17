import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
export interface Task{
  id:number;
  task:string;
  completed:boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

newTask:string="";
completed:boolean=false;
todoList:Task[]=[];
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

}
