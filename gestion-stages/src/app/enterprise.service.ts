import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
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

 enterpriseUrl = 'https://e-stages-gbgeb8.can.canonic.dev/api/enterprises';

 constructor(private http: HttpClient) { }

 getEntreprises(): Observable<ApiResponse<Entreprise[]>> {
  const dataURL: string = `${this.enterpriseUrl}`
  console.log("Tester :..........", dataURL)
  return this.http.get<ApiResponse<Entreprise[]>>(dataURL, httpOptions).pipe(catchError(this.handleError));
  // return this.http.get<ApiResponse<Entreprise[]>>(this.enterpriseUrl, httpOptions).pipe(catchError(this.handleError));;
}

getEntreprise(entrepriseId: string): Observable<ApiResponse<Entreprise[]>>{
  const dataURL = `${this.enterpriseUrl}/${entrepriseId}`;
  return this.http.get<ApiResponse<Entreprise[]>>(dataURL, httpOptions).pipe(catchError(this.handleError));

}

createEntreprise(newEntreprise: Entreprise): Observable<ApiResponse<Entreprise[]>> {
  const dataURL: string = `${this.enterpriseUrl }`
  // const headers = httpOptions.headers;
  console.log("Création vers l'api:========", newEntreprise)
  // return this.http.post<Entreprise>(`${this.enterpriseUrl}`, JSON.stringify(newEntreprise), httpOptions);
  return this.http.post<ApiResponse<Entreprise[]>>(dataURL, { input: newEntreprise }, httpOptions).pipe(catchError(this.handleError));

}

modifierEntreprise(entrepriseId: string, newEntreprise: Entreprise, ): Observable<ApiResponse<Entreprise[]>> {
  // const headers = httpOptions.headers;
  const dataURL: string = `${this.enterpriseUrl}/${entrepriseId}`;
  // const body = {  input: newEntreprise };
  return this.http.patch<ApiResponse<Entreprise[]>>(dataURL,  {input: newEntreprise},  httpOptions).pipe(catchError(this.handleError));
}

supprimerEntreprise(entrepriseId: string): Observable<any> {
  const dataURL: string = `${this.enterpriseUrl}/${entrepriseId}`;
  console.log("Entreprise supprimée",dataURL)
  // return this.http.delete(dataURL, {body: JSON.stringify({entrepriseId: entrepriseId})}).pipe(catchError(this.handleError));
  return this.http.delete<any>(dataURL).pipe(catchError(this.handleError));
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
