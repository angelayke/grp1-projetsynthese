import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STAGES } from '../mock-stages';
import { DemandesStagesService } from '../services/demandes-stages.service';
import { DemandeStage } from '../demandeStage';

@Component({
  selector: 'app-liste-demande-stages',
  templateUrl: './liste-demande-stages.component.html',
  styleUrls: ['./liste-demande-stages.component.scss']
})
export class ListeDemandeStagesComponent implements OnInit {
  // stages = STAGES;
  // demandesStages: Stage[] = STAGES;
  demandesStages : DemandeStage[] = [];

  newStage: DemandeStage = {
    _id: '',
    createdAt: '',
    updatedAt: '',
    titre: '',
    description: '',
    startDate: '',
    endDate: '',
    program: '',
    requirements: '',
    stageType: {
      __typename: '',
      label: '',
      value: ''
    },
    hoursPerWeek: 0,
    additionalInfo: '',
    paid: false,
    published: false,
    skills: {
      __typename: '',
      label: '',
      value: ''
    },
    active: false,
    region: {
      __typename: '',
      label: '',
      value: ''
    },
    activitySector: '',
    city: '',
    resume: '',
    enterprise: {
      _id: '',
      createdAt: '',
      updatedAt: '',
      name: '',
      description: '',
      imageUrl: '',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      published: true
    }
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




  afficherDetails(stage: DemandeStage): void {
    const id = stage?._id ?? '';
    this.demandeStageService.getDemandeStageById(id).subscribe(demande => {
      console.log("Demande de stage sélectionnée :", demande);
      this.demandeStageService.setDemandeStageSelectionnee(demande);
      this.router.navigate(['/sidenav/fiche-demandestage']);
    });
  }

}
