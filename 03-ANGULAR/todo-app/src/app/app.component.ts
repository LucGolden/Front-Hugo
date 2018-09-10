import {Component} from '@angular/core';
import {Task} from './shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //-- Nôtre tableau de tâches
  tasks: Task[] = [
    
  ]



  taskIsDone(task: Task) {
    tasks.status = true;

  }

  newTask(taskFromEvent: Task) {
    this.tasks.push(this.taskFromEvent);

  }

  removeTask(task: Task) {

  }
}


