import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from '../shared/task.service';
import { ListTask } from './list-tasks.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  ltasks: ListTask[];
  addList: Boolean = false;

  constructor(private listervice: ListService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.subscription = this.listervice.listsChanged.subscribe(
      (ltasks: ListTask[])=> {
        this.ltasks = ltasks;
      }
    );

    this.ltasks = this.listervice.getLists();
  }

  addTaskList(){
    this.addList = true;
  }

  onAccept(title:string){
    let newList = new ListTask(title, "NEW", []);
    this.listervice.addList(newList)
    this.addList = false;
    this.taskService.updateTasks(newList);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClose(){
    this.addList = false;
  }
}
