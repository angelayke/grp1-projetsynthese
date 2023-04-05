// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// // import { ApiResponse } from './stage';
// import { Stage } from './stage';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json',
//   'Authorization': '6404c645274d14000884986c-a9a0862d-b837-4bdd-97aa-9285851dbf02' })
// };
// @Injectable({
//   providedIn: 'root'
// })
// export class StageService {

//   constructor(private http: HttpClient) { }


//   stagesUrl = 'https://e-stages-gbgeb8.can.canonic.dev/api/stages';

//     getStages(): Observable<ApiResponse<Stage[]>> {
//       return this.http.get<ApiResponse<Stage[]>>(this.stagesUrl, httpOptions);
//     }


//     editStage(stage: Stage):Observable<Stage> {
//       return this.http.post<Stage>(this.stagesUrl, stage, httpOptions);
//   }


//   createStage(newStage: Stage): Observable<Stage> {
//     const headers = httpOptions.headers;
//     console.log("L'API fonctionne!")

//     return this.http.post<Stage>(`${this.stagesUrl}/stages`, JSON.stringify(newStage), httpOptions);
//   }


//   modifierStage(stage: Stage): Observable<Stage> {
//     // const headers = new HttpHeaders().set('Content-Type', 'application/json');
//     const headers = httpOptions.headers;
//     const url = `${this.stagesUrl}/stages/${stage._id}`;
//     return this.http.put<Stage>(url, JSON.stringify(stage), { headers: headers });
//   }

//   supprimerStage(id: string): Observable<any> {
//     const url = `${this.stagesUrl}/stages/${id}`;
//     return this.http.delete(url);
//   }

// }
