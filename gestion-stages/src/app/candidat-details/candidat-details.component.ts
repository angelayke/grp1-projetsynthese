import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../candidat.service';
import { Candidat,ApiResponse } from '../candidat';


@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.scss']
})

export class CandidatDetailsComponent implements OnInit {
  candidats : Candidat[]=[];
  selectedCandidat?: Candidat;
  _id!: number;
  candidat!: Candidat;
  
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
