import { Component, OnInit, Input } from '@angular/core';
import { ApiResponse, Entreprise } from '../entreprises';
import { ENTREPRISES } from '../mock-entreprises';
import { EnterpriseService } from '../enterprise.service';


@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent implements OnInit {
entreprises=ENTREPRISES;

 //entreprises : Entreprise[]=[];

  constructor(private entrepriseService : EnterpriseService) { }

  ngOnInit(): void {
   // this.getEntreprise();
  }

  //// l'api enterprise ne fonctionne pas ////
  // getEntreprise() {
  //   this.entrepriseService.getEntreprises().subscribe((data: ApiResponse<Entreprise[]>) => {
  //     this.entreprises = data.data;
  //     console.log("Données récupérées depuis l'API:", this.entreprises);
  //   }, (err) => {
  //     console.log("Impossible d'obtenir les données de l'url" + err);
  //   });
  // }


}
