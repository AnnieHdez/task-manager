import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/shared/task.model';
import { TaskService } from 'src/app/shared/task.service';
import { ListTask } from '../list-tasks.model';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit, OnDestroy {
  @Input() ltask: ListTask;
  @Input() index: number;
  selectedList: Task[];
  subscription: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
     this.subscription = this.taskService.taskChanged.subscribe(
      (tasks: Task[])=> {
        this.selectedList = tasks;
      }
    );
    this.selectedList = this.taskService.getTask();
  }

  listSelected(){
    this.taskService.updateTasks(this.ltask);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
