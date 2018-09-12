import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from '../../models/task';
import {timeout} from "rxjs/operators";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /**
   * Gestion des dates
   */
  date: Date =new Date();
  active: boolean = true;

  /**
   * Créations d'une tâches
   */
  task: Task = new Task();


  /**
   * Liste des tâches
   */
  tasks: Task[] = [
    {
      id: 1,
      name: 'Faire une sieste 15 min',
      status: false
    },
    {
      id: 2,
      name: 'Boire de l\'eau',
      status: true
    },
    {
      id: 3,
      name: 'Promener le chien',
      status: false
    },
    {
      id: 4,
      name: 'Donner à manger aux poissons',
      status: false
    },
    {
      id: 5,
      name: 'Payer les impôts...',
      status: true
    }


  ]

  /**
   * Déclenche l'enregistrement
   * d'une nouvelle tâches
   */
  saveTask() {

    if (undefined !== this.task.name) {
      /**
       * Attribution d'un "ID"
       */
      this.task.id = Date.now();

      /**
       * Ajout de la tâches dans le tableau
       */
      this.tasks.push(this.task);

    // -- Réinitialisation
      this.active = false;

      setTimeout(() => this.active = true, 0);

      this.task = new Task();

  }
}
  /**
   * Déclenche l'enregistrement
   * d'une nouvelle tâches lors
   * de la pression sur la touche "Enter"
   * @param key
   */
  enterSave(key: string) {
    if (key === "Enter"){
      this.saveTask();
    }
  }

  deleteTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
