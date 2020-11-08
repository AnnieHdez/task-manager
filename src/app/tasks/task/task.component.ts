import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
