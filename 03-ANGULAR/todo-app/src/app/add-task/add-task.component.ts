import {Component, OnInit, Output} from '@angular/core';
import {Task} from '../shared/models/task';
import {EventEmitter} from 'events';

//import {EventEmitter} from 'events';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  /**
   * La tâche à créer
   */
  task: Task = new Task;

  @Output() newTasEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Fonction appemée lors de
   * le création d'une tâche.
   */
  addTask(){
    console.log(this.task)

    /**
     * Prévenir l'application qu'une,
     * nouvelle tâche a été créée.
     */
    this.newTasEvent.emit(this.task);
    this.task = new Task();
  };

}
