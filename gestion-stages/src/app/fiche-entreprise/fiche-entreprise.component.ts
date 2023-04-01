import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Entreprise } from '../entreprises';
import { ENTREPRISES } from '../mock-entreprises';
import { EnterpriseService } from '../enterprise.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-fiche-entreprise',
  templateUrl: './fiche-entreprise.component.html',
  styleUrls: ['./fiche-entreprise.component.scss']
})

export class FicheEntrepriseComponent implements OnInit {
  @Input() entreprise?: Entreprise;
  entreprises=ENTREPRISES;


  editing: boolean = false;

  constructor(private dialog: MatDialog, private entrepriseService: EnterpriseService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.entrepriseService.getEntreprises().subscribe(
      resultat => {
        //
      }
    );
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

getEntreprises() { 
  this.entrepriseService.getEntreprises().subscribe(
    resultat => {
      console.log(resultat);
    }
  );
}

supprimerEntreprise(id: string) {
  this.entrepriseService.supprimerEntreprise(id).subscribe(
    _ => {
      this.getEntreprises();
      this._snackBar.open("Entreprise supprimée!", undefined, {
        duration: 2000
      });
    }
  );
}

}
