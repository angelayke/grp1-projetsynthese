import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {  STAGES } from '../mock-stages';
import { DemandesStagesService } from '../services/demandes-stages.service';
import { Stage } from '../stage';


@Component({
  selector: 'app-fiche-demande-stage',
  templateUrl: './fiche-demande-stage.component.html',
  styleUrls: ['./fiche-demande-stage.component.scss']
})
export class FicheDemandeStageComponent implements OnInit {

  public loading:boolean = false;
  public stage: Stage = {} as Stage;
  public errorMessage : string | null = null;


public stageId: string | null = null;

  constructor( private demandeStageService: DemandesStagesService, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
     this.stageId = param.get('_id')

    });
    if(this.stageId){
      this.demandeStageService.getDemandeStageById(this.stageId).subscribe((data) => {
        this.loading = true;
        this.stage = data;
        this.loading = false;

      }, (error) => {
        this.errorMessage = error;
        this.loading = false;

      })

    }

  }

  public isNotEmpty() {
    return Object.keys(this.stage).length > 0;
  }



}
