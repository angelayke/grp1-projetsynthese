import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Entreprise } from '../entreprises';
import { ENTREPRISES } from '../mock-entreprises';
import { EnterpriseService } from '../enterprise.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fiche-entreprise',
  templateUrl: './fiche-entreprise.component.html',
  styleUrls: ['./fiche-entreprise.component.scss']
})

export class FicheEntrepriseComponent implements OnInit {
  // @Input() entreprise?: Entreprise;
  // entreprises=ENTREPRISES;
  public loading: boolean = false;
  public entrepriseId: string | null = null;
  // public entreprise: Entreprise [] = [];
  // public entreprise: Entreprise = {} as Entreprise;
  public entreprise : any;
  public errorMessage: string | null = null;


  editing: boolean = false;

  constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute, private entrepriseService: EnterpriseService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.entrepriseId = param.get('entrepriseId');
    });
      if(this.entrepriseId) {
        this.loading = true;
        this.entrepriseService.getEntreprise(this.entrepriseId).subscribe((data) => {
          this.entreprise = data.data;
          this.loading = false;

        }, (error) => {
          this.errorMessage = error;
          this.loading = false;
        })
      }
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

// supprimerEntreprise(id: string) {
//   this.entrepriseService.supprimerEntreprise(id).subscribe(
//     _ => {
//       this.getEntreprises();
//       this._snackBar.open("Entreprise supprimée!", undefined, {
//         duration: 2000
//       });
//     }
//   );
// }

public isNotEmpty(){
  return Object.keys(this.entreprise).length > 0;

}

}
