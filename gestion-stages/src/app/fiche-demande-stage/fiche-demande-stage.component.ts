import { Component, OnInit } from '@angular/core';
import { STAGES } from '../mock-stages';
import { Stage } from '../stage';

@Component({
  selector: 'app-fiche-demande-stage',
  templateUrl: './fiche-demande-stage.component.html',
  styleUrls: ['./fiche-demande-stage.component.scss']
})
export class FicheDemandeStageComponent implements OnInit {

  demandesStages: Stage[] = STAGES;

  constructor( ) { }

  ngOnInit(): void {
  }

}
