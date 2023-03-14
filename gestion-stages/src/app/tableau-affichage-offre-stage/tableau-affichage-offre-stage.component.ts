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
  selector: 'app-tableau-affichage-offre-stage',
  templateUrl: './tableau-affichage-offre-stage.component.html',
  styleUrls: ['./tableau-affichage-offre-stage.component.scss']
})
export class TableauAffichageOffreStageComponent {
  displayedColumns: string[] = ['poste', 'ville', 'date', 'actions'];
  dataSource = OFFRESTAGE;

  // constructor() { }


  // ngOnInit(): void {
  // }

}
