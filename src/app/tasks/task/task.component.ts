import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;
  addTask: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onEdit(){
    this.addTask = true;
  }

  onAccept(title:string){
    this.taskService.updateTask(this.index, title);
    this.addTask = false;
  }

  onClose(){
    this.addTask = false;
  }

  onDelete(){
    this.taskService.deleteTask(this.index);
  }

  changeState(){
    this.task.completed = !this.task.completed;
  }

}
