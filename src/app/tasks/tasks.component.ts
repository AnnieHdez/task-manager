import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: Task[];
  addTask: boolean = false;
  subscription : Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.subscription = this.taskService.taskChanged.subscribe(
      (tasks: Task[])=> {
        this.tasks = tasks;
      });
  }

  onAddTask(){
    this.addTask = true;
  }

  onAccept(title:string){
    this.taskService.addTask(new Task(title, new Date(2020,11), false));
    this.addTask = false;
  }

  onClose(){
    this.addTask = false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
