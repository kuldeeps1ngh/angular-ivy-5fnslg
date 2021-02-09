import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Welcome to To-do list ';
  tabs = ['today', 'pending', 'abandon', 'completed', 'progress']
  selectedTab = this.tabs[0];
  todayTask = ['Shopping', 'Working-out', 'Movies']
  pendingTask = ['Pending1', 'Pending2', 'Pending3']
  abandonTask = ['ab1', 'ab2', 'ab3']
  compeltedTask = ['done1', 'done2', 'done3']
  progressTask = ['progress1', 'progress2', 'progress3']
  taskVal = '';
  submitted = false;

  addTask() {
    this.submitted = true;
    if (!this.taskVal) {
      return;
    }
    this.todayTask.push(this.taskVal);
    this.submitted = false;
    this.taskVal = '';
  }

  done(item) {
    this.pendingTask.splice(this.pendingTask.indexOf(item), 1);
    this.compeltedTask.push(item);
  }

  cancel(item) {
    this.pendingTask.splice(this.pendingTask.indexOf(item), 1);
    this.abandonTask.push(item);
  }

  progress(item) {
    this.todayTask.splice(this.todayTask.indexOf(item), 1);
    this.progressTask.push(item);
  }

  pending(item) {
    this.todayTask.splice(this.todayTask.indexOf(item), 1);
    this.pendingTask.push(item);
  }

  doneProgress(item) {
    this.progressTask.splice(this.progressTask.indexOf(item), 1);
    this.compeltedTask.push(item);
  }

  pendingProgress(item) {
    this.progressTask.splice(this.progressTask.indexOf(item), 1);
    this.pendingTask.push(item);
  }

  search(e, type: string) {
    const val = e.target.value;
    switch (type) {
      case this.tabs[0]:
        const backup = [...this.todayTask];
        if (!val) {
          
        }
        break;
    
      default:
        break;
    }
  }
}
