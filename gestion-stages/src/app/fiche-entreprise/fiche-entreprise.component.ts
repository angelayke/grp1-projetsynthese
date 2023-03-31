import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Entreprise } from '../entreprises';
import { ENTREPRISES } from '../mock-entreprises';


@Component({
  selector: 'app-fiche-entreprise',
  templateUrl: './fiche-entreprise.component.html',
  styleUrls: ['./fiche-entreprise.component.scss']
})

export class FicheEntrepriseComponent implements OnInit {
  @Input() entreprise?: Entreprise;
  entreprises=ENTREPRISES;


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
