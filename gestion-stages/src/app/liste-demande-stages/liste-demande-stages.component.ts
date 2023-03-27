import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STAGES } from '../mock-stages';
import { DemandesStagesService } from '../services/demandes-stages.service';
import { Stage } from '../stage';

@Component({
  selector: 'app-liste-demande-stages',
  templateUrl: './liste-demande-stages.component.html',
  styleUrls: ['./liste-demande-stages.component.scss']
})
export class ListeDemandeStagesComponent implements OnInit {
  // stages = STAGES;
  // demandesStages: Stage[] = STAGES;
  demandesStages : Stage[] = [];

  newStage: Stage = {
    _id: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    title: "",
    startDate: "",
    endDate: "",
    program: "",
    region: "",
    requirements: "",
    stageType: "",
    hoursPerWeek: 0,
    additionalInfo: "",
    paid: true,
    published: false,
    active: true,
    activitySector: "",
    enterprise: '',

  }


  constructor(private demandeStageService: DemandesStagesService, private router: Router) {

   }

  ngOnInit(): void {
    // this.demandesStages = STAGES;
    console.log("===============================",this.demandesStages)
    this.demandeStageService.getDemandesStages().subscribe((demandesStages) => {
      this.demandesStages = demandesStages;

      console.log("Récupération des données:",  this.demandesStages)

    });
  }




  afficherDetails(stage: Stage): void {
    const id = stage?._id ?? '';
    this.demandeStageService.getDemandeStageById(id).subscribe(demande => {
      console.log("Demande de stage sélectionnée :", demande);
      this.demandeStageService.setDemandeStageSelectionnee(demande);
      this.router.navigate(['/sidenav/fiche-demandestage']);
    });
  }

}
