import { Component, OnInit, Input } from '@angular/core';
import { ApiResponse, Entreprise } from '../entreprises';
import { ENTREPRISES } from '../mock-entreprises';
import { EnterpriseService } from '../enterprise.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent implements OnInit {
//entreprises=ENTREPRISES;

public loading: boolean = false;
entreprises : Entreprise[]=[];
public errorMessage: string | null = null;

  constructor(private entrepriseService : EnterpriseService, private router : Router) { }

  ngOnInit(): void {
   this.getEntreprise();
  }

  public getEntreprise() {
    this.loading = true;
     this.entrepriseService.getEntreprises().subscribe((data: ApiResponse<Entreprise[]>) => {
       this.entreprises = data.data;
       this.loading = false;
       console.log("Données récupérées depuis l'API:", this.entreprises);
     }, (error) => {
      this.errorMessage = error;
      // console.log("Impossible d'obtenir les données de l'url" + err);
      this.loading = false;
    });
   }

  //aide de pour faire en sorte que les card soient cliquable pour afficher la fiche correspondante + private router etc
// onCardClick() {
//   this.router.navigate(['/sidenav/fiche-entreprise'])
// }

}
