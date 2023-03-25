import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTable } from '@angular/material/table';

export interface OffreStage {
  profil: string;
  etablissement: string;
  date: string;
  actions: string;
}


const OFFRESTAGE: OffreStage[] = [
  {profil: 'Intégrateur Web', etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03', actions: 'H'},
  {profil: 'Intégrateur Web', etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03', actions: 'He'},
  {profil: 'Intégrateur Web', etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03', actions: 'Li'},
  {profil: 'Intégrateur Web', etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03', actions: 'Be'},
  {profil: 'Intégrateur Web', etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03', actions: 'B'},
];


@Component({
  selector: 'app-tableau-affichage-offre-stage2',
  templateUrl: './tableau-affichage-offre-stage2.component.html',
  styleUrls: ['./tableau-affichage-offre-stage2.component.scss']
})
export class TableauAffichageOffreStage2Component {
  displayedColumns: string[] = ['poste', 'secteur', 'region', 'date', 'actions'];
  dataSource = OFFRESTAGE;

  // constructor() { }


  // ngOnInit(): void {
  // }

}

