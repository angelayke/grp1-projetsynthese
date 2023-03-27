import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-demande-stage',
  templateUrl: './modifier-demande-stage.component.html',
  styleUrls: ['./modifier-demande-stage.component.scss']
})
export class ModifierDemandeStageComponent implements OnInit {

  formStage: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
  this.formStage = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
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

  onCancel(){
    // this.formStage.reset();

  }

  onAdd() {

  }

}
