import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField} from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-formulaire-offre-ajout',
  templateUrl: './formulaire-offre-ajout.component.html',
  styleUrls: ['./formulaire-offre-ajout.component.scss']
})
export class FormulaireOffreAjoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
