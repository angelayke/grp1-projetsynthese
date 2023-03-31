import { DemandeStage } from './../demandeStage';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {  DEMANDESTAGES } from '../mock-demandeStages';
import { DemandesStagesService } from '../services/demandes-stages.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';



@Component({
  selector: 'app-fiche-demande-stage',
  templateUrl: './fiche-demande-stage.component.html',
  styleUrls: ['./fiche-demande-stage.component.scss']
})
export class FicheDemandeStageComponent implements OnInit {

  public loading:boolean = false;
  public demandeStage: DemandeStage = {} as DemandeStage;
  public errorMessage : string | null = null;


public demandeStageId: string | null = null;

editing: boolean = false;


  constructor( private demandeStageService: DemandesStagesService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) {

  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
     this.demandeStageId = param.get('_id')

    });
    if(this.demandeStageId){
      this.demandeStageService.getDemandeStageById(this.demandeStageId).subscribe((data) => {
        this.loading = true;
        this.demandeStage = data;
        this.loading = false;

      }, (error) => {
        this.errorMessage = error;
        this.loading = false;

      })

    }

  }

  public isNotEmpty() {
    return Object.keys(this.demandeStage).length > 0;
  }




  onDoneClick(){
     this.editing = false;
     alert("Fiche sauvegardée!");
  }

  onEditClick(){
    this.editing = true;
    alert("Fiche modifiée!");
  }

  // onCancelClick(){
  //   this.editing = false;
  //   alert("Fiche annulée!");
  // }


  onDeleteClick(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: { message: 'Êtes-vous sûr de vouloir supprimer cette information ?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Fiche annulée!")
      }
    });
  }


}
