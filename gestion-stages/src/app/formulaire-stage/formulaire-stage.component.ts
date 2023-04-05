import { FormArray, Validators, FormBuilder } from '@angular/forms';

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


  formStage: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.formStage = this.fb.group({
      titre: new FormControl('', [Validators.required, Validators.minLength(5)]),
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
      discretion: new FormControl(true, Validators.requiredTrue),
      remunere: new FormControl(false),
      nonRemunere: new FormControl(false),


      informations: new FormControl(''),

    });

  }

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
