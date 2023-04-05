import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../candidat.service';
import { Candidat,ApiResponse } from '../candidat';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SuppressionDialogComponent } from '../suppression-dialog/suppression-dialog.component';


@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.scss']
})

export class CandidatDetailsComponent implements OnInit {
  candidats : Candidat[]=[];
  selectedCandidat?: Candidat;
  _id!: number;
  // candidat!: Candidat;
  public loading: boolean = false;
  public candidatId: string | null = null;
  // public candidat: Candidat [] = [];
  // public candidat: Candidat = {} as Candidat;
  public candidat : any;
  public errorMessage: string | null = null;
  editing: boolean = false;

    constructor(private activatedRoute: ActivatedRoute, private candidatService : CandidatService, private dialog: MatDialog) { }

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((param) => {
        this.candidatId = param.get('candidatId');
      });
        if(this.candidatId) {
          this.loading = true;
          this.candidatService.getCandidat(this.candidatId).subscribe((data) => {
            this.candidat = data.data;
            this.loading = false;

          }, (error) => {
            this.errorMessage = error;
            this.loading = false;
          })
        }



      // this.getCandidats()
    }
    // getCandidats(): void {
    //   this.candidatService.getCandidats().subscribe((data: ApiResponse<Candidat[]>) => {
    //     this.candidats = data.data;
    //     console.log("Données récupérées depuis l'API:", this.candidats);
    //   }, (err) => {
    //     console.log("Impossible d'obtenir les données de l'url" + err);
    //   });
    // }



  onDoneClick(){
      this.editing = false;
      alert("Fiche sauvegardée!");
   }

  //  onEditClick(){
  //    this.editing = true;
  //    alert("Fiche modifiée!");
  //  }

  //  onDeleteClick(): void {
  //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
  //     width: '400px',
  //     data: { message: 'Êtes-vous sûr de vouloir supprimer cette information ?' }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       console.log("Fiche annulée!")
  //     }
  //   });
  // }


  getCandidats(): void {
    this.candidatService.getCandidats()
      .subscribe(candidats => this.candidat = candidats);
  }


  onDeleteClick(candidatId: string): void {
    const dialogRef = this.dialog.open(SuppressionDialogComponent, {
      width: '400px',
      data: { message: 'Êtes-vous sûr de vouloir supprimer cette information ?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("juste pour tester",result)
      if (result) {
        this.candidatService.supprimerCandidat(candidatId)
          .subscribe((data) => {
            this.candidats = this.candidats.filter(candidat => candidat._id !== candidatId);
            console.log(this.candidats, data)
          });
      }
    });
  }


  public isNotEmpty(){
    return Object.keys(this.candidat).length > 0;

  }
}
