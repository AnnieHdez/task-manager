import { Task } from '../shared/task.model';

export class ListTask {
    public name: string;
    public description: string;
    public tasks: Task[];

    constructor(name:string, desc:string, tasks: Task[]){
        this.name = name;
        this.description =  desc;
        this.tasks = tasks;
    }
}