

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiResponse, Candidat } from './candidat'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': '6404c645274d14000884986c-a9a0862d-b837-4bdd-97aa-9285851dbf02' })
  };

  @Injectable({
    providedIn: 'root'
  })

  export class CandidatService {
    constructor(private http: HttpClient) {
    }
    candidatUrl = 'https://e-stages-gbgeb8.can.canonic.dev/api/candiadtes';

    getCandidats(): Observable<ApiResponse<Candidat[]>> {
      const dataURL: string = `${this.candidatUrl}`
      console.log("Tester :..........", dataURL)
      return this.http.get<ApiResponse<Candidat[]>>(dataURL, httpOptions).pipe(catchError(this.handleError));
    }

    getCandidat(candidatId: string): Observable<ApiResponse<Candidat[]>>{
      const dataURL = `${this.candidatUrl}/${candidatId}`;
      return this.http.get<ApiResponse<Candidat[]>>(dataURL, httpOptions).pipe(catchError(this.handleError));

    }

  //   editCandidat(candidat: Candidat):Observable<Candidat> {
  //     return this.http.post<Candidat>(this.candidatUrl, candidat, httpOptions);
  // }

  createCandidat(newCandidat: Candidat): Observable<ApiResponse<Candidat[]>> {
    const dataURL: string = `${this.candidatUrl }`
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // const headers = httpOptions.headers;
    console.log("Création vers l'api:========", newCandidat)
    // return this.http.post<Candidat>(`${this.candidatUrl}/candidats`, JSON.stringify(newCandidat), { headers: headers });
    return this.http.post<ApiResponse<Candidat[]>>(dataURL,newCandidat, httpOptions).pipe(catchError(this.handleError));
  }

  modifierCandidat(candidat: Candidat, candidatId: string): Observable<ApiResponse<Candidat[]>> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // const headers = httpOptions.headers;
    const dataURL: string = `${this.candidatUrl}/${candidatId}`;
    return this.http.put<ApiResponse<Candidat[]>>(dataURL, candidat, httpOptions).pipe(catchError(this.handleError));
  }


supprimerEntreprise(candidatId: string): Observable<{}> {
  const dataURL: string = `${this.candidatUrl}/${candidatId}`;
  console.log("=========================",dataURL)
  return this.http.delete(dataURL).pipe(catchError(this.handleError));
}


  // handle Error
public handleError(error: HttpErrorResponse){
  let errorMessage: string = '';
  if(error.error instanceof ErrorEvent){
      //client Error
      errorMessage = `Error : ${error.error.message}`
  } else {
      //server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
  }
  return throwError(errorMessage);
  }


  }
