import { Validators } from '@angular/forms';

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



  formStage = new FormGroup({
    title: new FormControl(''),
    nomPrenom: new FormControl(''),
    presentation: new FormControl(''),
    program: new FormControl(''),
    school: new FormControl(''),
    activity: new FormControl(''),
    ville: new FormControl(''),
    region: new FormControl(''),
    competences: new FormControl(''),
    typeStage: new FormControl(''),
    startDate: new FormControl(''),
    hoursPerWeek: new FormControl(''),
    endDate: new FormControl(''),
    remuneration1: new FormControl(''),
    remuneration2: new FormControl(''),
    remuneration3: new FormControl(''),


  });


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }


  onAdd() {
    // Vérification de la validité des champs
    Object.values(this.formStage.controls).forEach(control => control.markAsTouched());
    if (this.formStage.valid) {
      // Si le formulaire est valide, exécuter le code d'ajout
      const formData = this.formStage.value;
         console.log(formData);
         this.formStage.reset();
    } else if (!this.formStage.valid) {
      // Si le formulaire est invalide, afficher un message d'erreur
      console.log("Les champs sont obligatoires. Veuillez les remplir SVP!");
      alert("Les champs sont obligatoires. Veuillez les remplir SVP!");
    }
  }




  ajouterDemande(){
    this.router.navigate(['/formStage']);
    console.log("Tester")

  }

  onCancel(){
    this.formStage.reset();

  }

}
