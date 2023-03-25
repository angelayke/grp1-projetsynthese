

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Candidat } from './candidat'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': '6404c645274d14000884986c-a9a0862d-b837-4bdd-97aa-9285851dbf02' })
  };

  @Injectable({
    providedIn: 'root'
  })

  export class CandidatService {
    constructor(private http: HttpClient) { 
    }
    candidatsUrl = 'https://e-stages-gbgeb8.can.canonic.dev/api/candiadtes';

    getCandidats(): Observable<ApiResponse<Candidat[]>> {
      return this.http.get<ApiResponse<Candidat[]>>(this.candidatsUrl, httpOptions);
    }
    editCandidats(candidat: Candidat):Observable<Candidat> {
      return this.http.post<Candidat>(this.candidatsUrl, candidat, httpOptions);
  }

  createCandidats(newCandidat: Candidat): Observable<Candidat> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const headers = httpOptions.headers;
    console.log("L'API fonctionne!")
    // return this.http.post<Candidat>(`${this.candidatUrl}/candidats`, JSON.stringify(newCandidat), { headers: headers });
    return this.http.post<Candidat>(`${this.candidatsUrl}/candiadtes`, JSON.stringify(newCandidat), httpOptions);
  }

  modifierCandidats(candidat: Candidat): Observable<Candidat> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const headers = httpOptions.headers;
    const url = `${this.candidatsUrl}/candiadtes/${candidat._id}`;
    return this.http.put<Candidat>(url, JSON.stringify(candidat), { headers: headers });
  }

  supprimerCandidats(id: string): Observable<any> {
    const url = `${this.candidatsUrl}/candiadtes/${id}`;
    return this.http.delete(url);
  }
  
  }