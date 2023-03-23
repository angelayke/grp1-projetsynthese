import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField} from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Stage } from '../stage';

@Component({
  selector: 'app-formulaire-offre-ajout',
  templateUrl: './formulaire-offre-ajout.component.html',
  styleUrls: ['./formulaire-offre-ajout.component.scss']
})
export class FormulaireOffreAjoutComponent implements OnInit {

  newStage: Stage = {title: '', enterprise: '', description: '', program: '', requirements: '', 
                     stageType: '', hoursPerWeek: 0, startDate: '', endDate: '', paid: false,  
                     additionalInfo: ''};


  constructor() { }

  ngOnInit(): void {
  }

  // addStage(formulaireOffreAjout: NgForm) {
  //   if (formulaireOffreAjout.valid) {
  //   this.produitService.addProduit(this.newProduit).subscribe(
  //   _ => {
  //   produitFormAjout.resetForm();
  //   this.produitAjoute.emit();
  //   this.dialogRef.close();
  //   }
  //   );
  //   }
  // }  


}
