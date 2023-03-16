
// import { StagesRequest } from './../models/stagesRequests';
import { Component, OnInit } from '@angular/core';
import { StagesRequest } from '../models/stagesRequests';
import { Stage } from '../stage'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulaire-stage',
  templateUrl: './formulaire-stage.component.html',
  styleUrls: ['./formulaire-stage.component.scss']
})
export class FormulaireStageComponent implements OnInit {

  form = new FormGroup({
    titre: new FormControl(''),
    nomPrenom: new FormControl(''),
    presentation: new FormControl(''),
    program: new FormControl(''),
    school: new FormControl(''),
    activity: new FormControl(''),
    ville: new FormControl(''),
    competences: new FormControl(''),
    typeStage: new FormControl(''),
    startDate: new FormControl(''),
    hoursPerWeek: new FormControl(''),
    endDate: new FormControl(''),
    remuneration: new FormControl(''),




  });



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
  onAdd(){

  }
  ajouterDemande(){
    this.router.navigate(['/form']);
    console.log("Tester")

  }

}
