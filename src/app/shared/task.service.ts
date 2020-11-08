import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ListTask } from '../list-tasks/list-tasks.model';
import { Task } from '../shared/task.model';

@Injectable({providedIn: 'root'})
export class TaskService {
    tasks: Task[];
    taskChanged = new Subject<Task[]>();

    updateTask(list: ListTask) {
        this.tasks = list.tasks;
        this.taskChanged.next(this.tasks.slice());
    }

    getTask() {
        if(this.tasks)
            return this.tasks.slice();
        else
            return null;
    }

    // addList(list: ListTask) {
    //     this.lists.push(list);
    //     this.listsChanged.next(this.lists.slice());
    // }

    // updateList(list: ListTask, index: number) {
    //     this.lists[index] = list;
    //     this.listsChanged.next(this.lists.slice());
    // }

    // deleteList(index: number) {
    //     this.lists.splice(index,1);
    //     this.listsChanged.next(this.lists.slice());
    // }
}