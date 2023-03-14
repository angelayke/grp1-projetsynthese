import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { STAGESREQUESTS } from '../mock-data/mock-stagesRequest';
import { StagesRequest } from '../models/stagesRequests';

@Injectable({
  providedIn: 'root'
})
export class StagesRequestService {

  stagesRequests: StagesRequest[] = STAGESREQUESTS;

  constructor() { }

  getStagesRequests(): Observable<StagesRequest[]> {
    // return of(STAGESREQUESTS);
    return of(this.stagesRequests);
  }

  deleteStagesRequest(_id: string): void {
    // const stageR = STAGESREQUESTS.filter(stage => stage._id !== _id);
    this.stagesRequests = this.stagesRequests.filter(stage => stage._id !== _id);
    // const index = STAGESREQUESTS.findIndex(stage => stage._id === _id);
    // if (index !== -1) {
    //   STAGESREQUESTS.splice(index, 1);
    // }
  }



  // deleteStagesRequest(stagesRequest: StagesRequest) {
  //   const index = STAGESREQUESTS.indexOf(stagesRequest);
  //   if (index >= 0) {
  //     STAGESREQUESTS.splice(index, 1);
  //   }
  // }



  getStagesRequestById(_id: string): Observable<StagesRequest> {
    const stagesRequest = STAGESREQUESTS.filter(sr => sr._id === _id)[0];
    return of(stagesRequest);
  }


  updateStagesRequest(stagesRequest: StagesRequest): Observable<StagesRequest> {
    const index = this.stagesRequests.findIndex(sr => sr._id === stagesRequest._id);
    if (index !== -1) {
      this.stagesRequests[index] = stagesRequest;
    }
    console.log("Mise à jour",stagesRequest)
    return of(stagesRequest);
  }

}
