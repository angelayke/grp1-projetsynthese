import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EnterpriseService } from '../enterprise.service';
import { NgForm } from '@angular/forms';
//import { ApiResponse, Entreprise } from '../entreprises';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiResponse, Entreprise } from '../entreprises';

@Component({
  selector: 'app-formulaire-ajout-entreprise',
  templateUrl: './formulaire-ajout-entreprise.component.html',
  styleUrls: ['./formulaire-ajout-entreprise.component.scss']
})
export class FormulaireAjoutEntrepriseComponent implements OnInit {
  @Output() entrepriseAjoute = new EventEmitter();// pour rafraichir le tableau apres l'ajout


  //toute cette partie est pour le bouton de upload une image de logo
  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Logo';

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Logo';
    }
  }
//fin upload image logo

public entreprise: Entreprise = {} as Entreprise;
public errorMessage: string | null = null;

newEntreprise: Entreprise ={
  createdAt: '',
  updatedAt: '',
  description: '',
  imageUrl: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  address: '',
  city: '',
  province: '',
  postalCode: '',
  published: false
}

  constructor(private entrepriseService: EnterpriseService, private router: Router ) { //public dialogRef: MatDialogRef<FormulaireAjoutEntrepriseComponent>, @Inject(MAT_DIALOG_DATA) public data: Entreprise
    // if (data) {
    //   this.newEntreprise = data;
    // }
  } 

  ngOnInit(): void {
    this.entrepriseService.getEntreprises().subscribe(
      resultat => {
        //
      }
    );
  }

  // createEntreprise(entrepriseFormAjout: NgForm) {
  //   if (entrepriseFormAjout.valid){
  //     this.entrepriseService.createEntreprise(this.newEntreprise).subscribe(
  //       _ => {
  //         entrepriseFormAjout.resetForm();
  //         this.entrepriseAjoute.emit();
  //         //this.dialogRef.close("Entreprise ajoutée");
  //       }
  //     );
  //   }
  // }


   annuler() {
  //   //this.dialogRef.close();
     }
  
  createEntreprise() {
    this.entrepriseService.createEntreprise(this.entreprise).subscribe((data) => { //:ApiResponse<Entreprise[]>
      this.router.navigate(['sidenav/tableaudebord']).then();
    },
    (error) => {
    this.errorMessage = error;
    this.router.navigate(['sidenav/tableaudebord/ajout-entreprise']).then();

  });
  }
}
