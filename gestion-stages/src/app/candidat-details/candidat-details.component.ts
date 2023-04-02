import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../candidat.service';
import { Candidat,ApiResponse } from '../candidat';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';


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
  
  editing: boolean = false;
  
    constructor(private candidatService : CandidatService, private dialog: MatDialog) { }
  
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


  
  onDoneClick(){
      this.editing = false;
      alert("Fiche sauvegardée!");
   }
  
   onEditClick(){
     this.editing = true;
     alert("Fiche modifiée!");
   }
  
   onDeleteClick(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: { message: 'Êtes-vous sûr de vouloir supprimer cette information ?' }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Fiche annulée!")
      }
    });
  }
}
