import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiResponse, Entreprise } from '../entreprises';
import { EnterpriseService } from '../enterprise.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-update-entreprise',
  templateUrl: './formulaire-update-entreprise.component.html',
  styleUrls: ['./formulaire-update-entreprise.component.scss']
})
export class FormulaireUpdateEntrepriseComponent implements OnInit {

  public loading: boolean = false;
  public entrepriseId: string | null = null;
  // public entreprise: Entreprise = {} as Entreprise;
  public entreprise: any;
  public errorMessage : string | null = null;

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
    _id: '',
    createdAt: '',
    updatedAt: '',
    description: '',
    name: '',
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

  constructor(private activatedRoute:ActivatedRoute, private entrepriseService: EnterpriseService, private router: Router ) { }

  ngOnInit(): void {
    // this.entrepriseService.getEntreprises().subscribe(
    //   resultat => {
    //     //
    //   }
    // );
    this.activatedRoute.paramMap.subscribe((param) => {
      this.entrepriseId = param.get('entrepriseId');
       console.log("==================================",this.entrepriseId)
    });
    if(this.entrepriseId){
       this.entrepriseService.getEntreprise(this.entrepriseId).subscribe((data: ApiResponse<Entreprise[]>) => {
        this.entreprise = data.data;
        this.loading = false;

      }, (error)=>{
        this.errorMessage = error;
        this.loading = false;
      })
    }

  }


//   modifierEntreprise(entrepriseFormEdit: NgForm) {
//     if (entrepriseFormEdit.valid) {
//       this.entrepriseService.modifierEntreprise(this.newEntreprise).subscribe(
//       _ => {
//         entrepriseFormEdit.resetForm();
//         //this.dialogRef.close("Entreprise modifiée");
//         }
//       );
//     }
//  }

updateEntreprise(){
  if(this.entrepriseId){
    this.entrepriseService.modifierEntreprise(this.entrepriseId, this.entreprise).subscribe((data: ApiResponse<Entreprise[]>) => {
      this.router.navigate(['sidenav/tableaudebord/']).then();

    }, (error) => {
      this.errorMessage = error;
      this.router.navigate([`sidenav/tableaudebord/modifier-entreprise/${this.entrepriseId}`]).then();

    });
   }

}



 annuler() {
  //this.dialogRef.close();
  }

}
