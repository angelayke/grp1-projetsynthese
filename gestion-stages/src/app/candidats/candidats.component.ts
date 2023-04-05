import { Component, OnInit } from '@angular/core';
///import {CANDIDATS} from '../mock-candidat';
import { Candidat,ApiResponse } from '../candidat';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.scss']
})
export class CandidatsComponent implements OnInit {
//candidats=CANDIDATS

public loading: boolean = false;
candidats : Candidat[]=[];
public errorMessage: string | null = null;
selectedCandidat?: Candidat;

  constructor(private candidatService : CandidatService, private router : Router) { }

  ngOnInit(): void {
    this.getCandidats()
  }
  getCandidats(): void {
    this.loading = true;
    this.candidatService.getCandidats().subscribe((data: ApiResponse<Candidat[]>) => {
      this.candidats = data.data;
      this.loading = false;
      console.log("Données récupérées depuis l'API:", this.candidats);
    }, (error) => {
      this.errorMessage = error;
      this.loading = false;
      // console.log("Impossible d'obtenir les données de l'url" + err);
    });
  }

  //aide de pour faire en sorte que les card soient cliquable pour afficher la fiche correspondante + private router etc
// onCardClick() {
//   this.router.navigate(['/sidenav/candidat-details'])
// }


}
