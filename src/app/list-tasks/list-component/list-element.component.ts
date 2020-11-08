import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { ListTask } from '../list-tasks.model';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {
  @Input() ltask: ListTask;
  @Input() index: number;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  listSelected(){
    this.taskService.updateTask(this.ltask);
  }

}
