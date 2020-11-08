import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../shared/task.model';
import { ListTask } from './list-tasks.model';

@Injectable({providedIn: 'root'})
export class ListService {
    tasks: Task[] = [new Task("task 1", new Date(2020,11), false), new Task("task 2", new Date(2022,11), false), new Task("task 3", new Date(2020,11), true), new Task("task 4", new Date(2018,11), true)];
    private lists: ListTask[] = [new ListTask("List 1", "things to do today", this.tasks), new ListTask("List 2", "things to do tomorrow", this.tasks)];
    listsChanged = new Subject<ListTask[]>();

    getLists() {
        return this.lists.slice();
    }

    getList(id: number) {
        return this.lists[id];
    }

    addList(list: ListTask) {
        this.lists.push(list);
        this.listsChanged.next(this.lists.slice());
    }

    updateList(list: ListTask, index: number) {
        this.lists[index] = list;
        this.listsChanged.next(this.lists.slice());
    }

    deleteList(index: number) {
        this.lists.splice(index,1);
        this.listsChanged.next(this.lists.slice());
    }
}