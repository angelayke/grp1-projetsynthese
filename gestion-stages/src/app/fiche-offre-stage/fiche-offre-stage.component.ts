import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-fiche-offre-stage',
  templateUrl: './fiche-offre-stage.component.html',
  styleUrls: ['./fiche-offre-stage.component.scss']
})
export class FicheOffreStageComponent implements OnInit {

  editing: boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
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
