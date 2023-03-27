import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, of, throwError } from 'rxjs';
import { STAGES } from '../mock-stages';
import { Stage } from '../stage';

@Injectable({
  providedIn: 'root'
})
export class DemandesStagesService {


  demandesStages: Stage[] = STAGES;
  demandeStageSelectionnee!: Stage;

  constructor(private http: HttpClient) { }

  getDemandesStages(): Observable<Stage[]>{
    console.log("Demande stage service fonctionne pour tous les stages", this.demandesStages)
    return of(this.demandesStages)

  }

  deleteDemandeStages(_id: string): void {
    this.demandesStages = this.demandesStages.filter(stage => stage._id != _id);
  }

  // getDemandeStageById(_id: string): Observable<Stage>{
  //   const demandeStage = STAGES.filter(ds => ds._id === _id)[0];
  //   console.log("Verification:...........",demandeStage)
  //   return of(demandeStage)
  // }
  getDemandeStageById(_id: string): Observable<Stage>{
    const demandeStage = this.demandesStages.find((ds: Stage) => ds._id === _id);

    console.log("Demande stage service fonctionne pour le stage avec l'ID: " + _id, demandeStage);
    return of(demandeStage).pipe(filter((ds:Stage | undefined):ds is Stage => ds !== undefined));
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


  setDemandeStageSelectionnee(demandeStage: Stage): void {
    this.demandeStageSelectionnee = demandeStage;
  }

  getDemandeStageSelectionnee(): Stage {
    return this.demandeStageSelectionnee;
  }


}
