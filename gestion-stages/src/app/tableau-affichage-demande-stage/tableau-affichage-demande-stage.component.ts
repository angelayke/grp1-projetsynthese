import { Component, OnInit } from '@angular/core';
import { MatPaginator, } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {AfterViewInit,  ViewChild} from '@angular/core';
export interface DemandeStage {
  profil: string;
  etablissement: string;
  date: string;
}
const ELEMENT_DATA: DemandeStage[] = [
  { profil: 'Intégrateur Web', etablissement: 'Cegep de Trois-Rivères', date: '2022-03-03'},
  { profil: 'Intégrateur Web', etablissement: 'Cegep de Trois-Rivères', date: '2022-03-03'},
  { profil: 'Intégrateur Web', etablissement: 'Cegep de Trois-Rivères', date: '2022-03-03'},
  { profil: 'Intégrateur Web', etablissement: 'Cegep de Trois-Rivères', date: '2022-03-03'},
  { profil: 'Intégrateur Web', etablissement: 'Cegep de Trois-Rivères', date: '2022-03-03'},
  { profil: 'Intégrateur Web', etablissement: 'Cegep de Trois-Rivères', date: '2022-03-03'},
  { profil: 'Intégrateur Web', etablissement: 'Cegep de Trois-Rivères', date: '2022-03-03'},
  { profil: 'Intégrateur Web', etablissement: 'Cegep de Trois-Rivères', date: '2022-03-03'},
  { profil: 'Intégrateur Web', etablissement: 'Cegep de Trois-Rivères', date: '2022-03-03'},


];

@Component({
  selector: 'app-tableau-affichage-demande-stage',
  templateUrl: './tableau-affichage-demande-stage.component.html',
  styleUrls: ['./tableau-affichage-demande-stage.component.scss']
})
export class TableauAffichageDemandeStageComponent implements OnInit {
  displayedColumns: string[] = ['profil', 'etablissement', 'date', 'actions'];
  // dataSource!: MatTableDataSource<DemandeStage>;
  dataSource = ELEMENT_DATA


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {

   }

   ngAfterViewInit() {

  }



  ngOnInit(): void {
  }

}



