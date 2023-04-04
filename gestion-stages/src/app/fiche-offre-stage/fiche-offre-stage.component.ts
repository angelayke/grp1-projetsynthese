// import { Component, OnInit } from '@angular/core';
// import { MatCard } from '@angular/material/card';
// import { MatDialog } from '@angular/material/dialog';
// import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

import { Stage } from '../stage';  
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { STAGES } from '../mock-stages'; 
import { StagesService } from '../services/stages.service'; 
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-fiche-offre-stage',
  templateUrl: './fiche-offre-stage.component.html',
  styleUrls: ['./fiche-offre-stage.component.scss']
})
export class FicheOffreStageComponent implements OnInit {

  public loading:boolean = false;
  public stage: Stage = {} as Stage;
  public errorMessage : string | null = null;


  public stageId: string | null = null;

  editing: boolean = false;

  constructor(private stageService: StagesService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
     this.stageId = param.get('_id')

    });
    if(this.stageId){
      this.stageService.getStageById(this.stageId).subscribe((data) => {
        this.loading = true;
        this.stage = data;
        this.loading = false;
  }, (error) => {
    this.errorMessage = error;
    this.loading = false;

  })

 }

}

  public isNotEmpty() {
    return Object.keys(this.stage).length > 0;
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
