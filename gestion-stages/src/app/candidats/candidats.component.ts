import { Component, OnInit } from '@angular/core';
///import {CANDIDATS} from '../mock-candidat';
import { Candidat,ApiResponse } from '../candidat';
import { CandidatService } from '../candidat.service';


@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.scss']
})
export class CandidatsComponent implements OnInit {
//candidats=CANDIDATS
candidats : Candidat[]=[];
selectedCandidat?: Candidat;


  constructor(private candidatService : CandidatService) { }

  ngOnInit(): void {
    this.getCandidats()
  }
  getCandidats(): void {
    this.candidatService.getCandidats().subscribe((data: ApiResponse<Candidat[]>) => {
      this.candidats = data.data;
      console.log("Données récupérées depuis l'API:", this.candidats);
    }, (err) => {
      console.log("Impossible d'obtenir les données de l'url" + err);
    });
  }
}
