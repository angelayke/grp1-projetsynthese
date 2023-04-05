import { EnterpriseService } from './../enterprise.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Entreprise } from '../entreprises';
import { ENTREPRISES } from '../mock-entreprises';
// import { EnterpriseService } from '../enterprise.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SuppressionDialogComponent } from '../suppression-dialog/suppression-dialog.component';


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
  entreprises: Entreprise[];
  public errorMessage: string | null = null;


  editing: boolean = false;

  constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute, private entrepriseService: EnterpriseService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.entrepriseId = param.get('entrepriseId');
      console.log("la variable id: ", this.entrepriseId)
    });
      if(this.entrepriseId) {
        this.loading = true;
        this.entrepriseService.getEntreprise(this.entrepriseId).subscribe((data) => {
          this.entreprise = data.data;
          console.log("Tester:...........",this.entreprise, this.entrepriseId)
          this.loading = false;

        }, (error) => {
          this.errorMessage = error;
          this.loading = false;
        })
      }
  }

  // getEntreprise(entrepriseId: string): void{
  //   this.entrepriseService.getEntreprise(entrepriseId).subscribe(response => {
  //     this.entreprise = response.data;
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

onDeleteClick(entrepriseId: string): void {
  const dialogRef = this.dialog.open(SuppressionDialogComponent, {
    width: '400px',
    data: { message: 'Êtes-vous sûr de vouloir supprimer cette information ?' }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log("juste pour tester",result)
    if (result) {
      this.entrepriseService.supprimerEntreprise(entrepriseId)
        .subscribe((data) => {
          this.entreprises = this.entreprises.filter(entreprise => entreprise._id !== entrepriseId);
          console.log("????????????????????",this.entreprises, data)
        }, (error)=>{
          this.errorMessage = error;
        });
    }
  });
}

// onDeleteClick(entrepriseId: string): void {
//   const dialogRef = this.dialog.open(SuppressionDialogComponent, {
//     width: '400px',
//     data: { message: 'Êtes-vous sûr de vouloir supprimer cette information ?' }
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log("juste pour tester",result)
//     if (result) {
//       this.entrepriseService.supprimerEntreprise(entrepriseId)
//         .subscribe(() => {
//           this.entreprise = null;
//           console.log("Entreprise supprimée", entrepriseId);
//         }, (error)=>{
//           this.errorMessage = error;
//         });
//     }
//   });
// }

getEntreprises(): void {
  this.entrepriseService.getEntreprises()
    .subscribe(entreprises => this.entreprise = entreprises);
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
