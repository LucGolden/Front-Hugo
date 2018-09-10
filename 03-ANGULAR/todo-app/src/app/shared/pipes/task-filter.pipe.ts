import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'taskFilter',
  pure: false
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks : Task[], status: boolean): Task[] {
    const filteredTasks: Task[] = [];
    /**
     * Je retourne un tableau de tâches filtré
     * par rapport au " status"
     */
    for(let i=0; i<tasks.length; i++){
      //-- Vérification dans la console
      console.log(tasks[i]);

      /**
       * JE V2RIFIE SI LE "STATUS" de l'une de mes tâches (tasks[i])
       * correspond
       */
      if(tasks[i].status === status){
      filteredTasks.push(tasks[i]);
  }
    }
    return filteredTasks;
  }

}
