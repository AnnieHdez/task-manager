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
  subscription : Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.subscription = this.taskService.taskChanged.subscribe(
      (tasks: Task[])=> {
        this.tasks = tasks;
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
