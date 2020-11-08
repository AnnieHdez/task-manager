import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ListTask } from '../list-tasks/list-tasks.model';
import { Task } from '../shared/task.model';

@Injectable({providedIn: 'root'})
export class TaskService {
    tasks: Task[];
    taskChanged = new Subject<Task[]>();

    updateTasks(list: ListTask) {
        this.tasks = list.tasks;
        this.taskChanged.next(this.tasks.slice());
    }

    getTask() {
        if(this.tasks)
            return this.tasks.slice();
        else
            return null;
    }

    addTask(task: Task) {
        this.tasks.push(task);
        this.taskChanged.next(this.tasks.slice());
    }

    updateTask(index: number, title: string) {
        this.tasks[index].name = title;
        this.taskChanged.next(this.tasks.slice());
    }

    deleteTask(index: number) {
        this.tasks.splice(index,1);
        this.taskChanged.next(this.tasks.slice());
    }
}