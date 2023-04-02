import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, Observable, of, throwError } from 'rxjs';
// import { DEMANDESTAGES } from '../mock-demandeStages';
// import { DemandeStage } from '../demandeStage';
import { STAGES } from '../mock-stages';
import { Stage } from '../stage';

@Injectable({
  providedIn: 'root'
})
export class StagesService {

  Stages: Stage[] = STAGES;
  StageSelectionnee!: Stage;

  constructor(private http: HttpClient) { }

  getStages(): Observable<Stage[]>{
    console.log("Stage service fonctionne pour tous les stages", this.Stages)
    return of(this.Stages)

  }

  deleteStage(_id: string): void {
    this.Stages = this.Stages.filter(stage => stage._id != _id);
  }

  // getDemandeStageById(_id: string): Observable<Stage>{
  //   const demandeStage = STAGES.filter(ds => ds._id === _id)[0];
  //   console.log("Verification:...........",demandeStage)
  //   return of(demandeStage)
  // }
  getStageById(_id: string): Observable<Stage>{
    const Stage = this.Stages.find((ds: Stage) => ds._id === _id);

    console.log("Stage service fonctionne pour le stage avec l'ID: " + _id, Stage);
    return of(Stage).pipe(filter((ds:Stage | undefined):ds is Stage => ds !== undefined));
    // if (demandeStage) {
    //     return of(demandeStage);
    // } else {
    //     return throwError(`La demande de stage avec l'ID ${_id} n'a pas été trouvée.`);
    // }
}

  // // Get a stage
  // getStageById(id: string): Observable<Stage> {
  //   // if (!id) {
  //   //   throw new Error('ID cannot be null or undefined');
  //   // }
  //   return this.http.get<Stage>(`${this.demandesStages}/${id}`);
  // }


  setStageSelectionnee(Stage: Stage): void {
    this.StageSelectionnee = Stage;
  }

  getStageSelectionnee(): Stage {
    return this.StageSelectionnee;
  }


}


