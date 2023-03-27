import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Entreprise } from './entreprises';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '6404c645274d14000884986c-a9a0862d-b837-4bdd-97aa-9285851dbf02'
 })
};

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = 'https://e-stages-gbgeb8.can.canonic.dev/api/enterprises';

  getEntreprises(): Observable<ApiResponse<Entreprise[]>> {
    return this.http.get<ApiResponse<Entreprise[]>>(this.enterpriseUrl, httpOptions);
  }

  createEntreprise(newEntreprise: Entreprise): Observable<Entreprise> {
    const headers = httpOptions.headers;
    console.log("L'API fonctionne!")
    return this.http.post<Entreprise>(`${this.enterpriseUrl}/enterprise`, JSON.stringify(newEntreprise), httpOptions);
  }

  modifierEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    const headers = httpOptions.headers;
    const url = `${this.enterpriseUrl}/candiadtes/${entreprise._id}`;
    return this.http.put<Entreprise>(url, JSON.stringify(entreprise), { headers: headers });
  }

  supprimerEntreprise(id: string): Observable<any> {
    const url = `${this.enterpriseUrl}/enterprises/${id}`;
    return this.http.delete(url);
  }


}
