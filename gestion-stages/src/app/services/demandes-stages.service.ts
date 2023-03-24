import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { STAGES } from '../mock-stages';
import { Stage } from '../stage';

@Injectable({
  providedIn: 'root'
})
export class DemandesStagesService {


  demandesStages: Stage[] = STAGES;

  constructor() { }

  getDemandesStages(): Observable<Stage[]>{
    return of(this.demandesStages)

  }

  deleteDemandeStages(_id: string): void {
    this.demandesStages = this.demandesStages.filter(stage => stage._id != _id);
  }

  getDemandeStageById(_id: string): Observable<Stage>{
    const demandeStage = STAGES.filter(ds => ds._id === _id)[0];
    return of(demandeStage)
  }



}
