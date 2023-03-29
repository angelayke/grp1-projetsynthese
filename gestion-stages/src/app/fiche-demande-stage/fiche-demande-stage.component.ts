import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {  DEMANDESTAGES } from '../mock-demandeStages';
import { DemandesStagesService } from '../services/demandes-stages.service';
import { DemandeStage } from '../demandeStage';


@Component({
  selector: 'app-fiche-demande-stage',
  templateUrl: './fiche-demande-stage.component.html',
  styleUrls: ['./fiche-demande-stage.component.scss']
})
export class FicheDemandeStageComponent implements OnInit {

  public loading:boolean = false;
  public demandeStage: DemandeStage = {} as DemandeStage;
  public errorMessage : string | null = null;


public demandeStageId: string | null = null;

  constructor( private demandeStageService: DemandesStagesService, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
     this.demandeStageId = param.get('_id')

    });
    if(this.demandeStageId){
      this.demandeStageService.getDemandeStageById(this.demandeStageId).subscribe((data) => {
        this.loading = true;
        this.demandeStage = data;
        this.loading = false;

      }, (error) => {
        this.errorMessage = error;
        this.loading = false;

      })

    }

  }

  public isNotEmpty() {
    return Object.keys(this.demandeStage).length > 0;
  }



}
