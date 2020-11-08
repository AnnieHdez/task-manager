import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list-tasks/list.component';
import { TasksComponent } from './tasks/tasks.component';
import { AlarmComponent } from './shared/alarm/alarm.component';
import { ListElementComponent } from './list-tasks/list-component/list-element.component';
import { TaskComponent } from './tasks/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    TasksComponent,
    AlarmComponent,
    ListElementComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
