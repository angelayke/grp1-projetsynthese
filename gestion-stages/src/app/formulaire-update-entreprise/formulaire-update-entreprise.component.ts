import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Entreprise } from '../entreprises';
import { EnterpriseService } from '../enterprise.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire-update-entreprise',
  templateUrl: './formulaire-update-entreprise.component.html',
  styleUrls: ['./formulaire-update-entreprise.component.scss']
})
export class FormulaireUpdateEntrepriseComponent implements OnInit {

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
  
  constructor(private entrepriseService: EnterpriseService ) { }

  ngOnInit(): void {
    this.entrepriseService.getEntreprises().subscribe(
      resultat => {
        //
      }
    );
  }


  modifierEntreprise(entrepriseFormAjout: NgForm) {
    if (entrepriseFormAjout.valid) {
      this.entrepriseService.modifierEntreprise(this.newEntreprise).subscribe(
      _ => {
        entrepriseFormAjout.resetForm();
        //this.dialogRef.close("Entreprise modifiée");
        }
      );
    }
 }

 annuler() {
  //this.dialogRef.close();
  }

}
