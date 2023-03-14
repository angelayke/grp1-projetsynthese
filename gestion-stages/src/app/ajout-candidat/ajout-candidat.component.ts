import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Candidat } from '../candidat';


@Component({
  selector: 'app-ajout-candidat',
  templateUrl: './ajout-candidat.component.html',
  styleUrls: ['./ajout-candidat.component.scss']
})
export class AjoutCandidatComponent implements OnInit {
  candidat: Candidat = new Candidat();
  submitted = false;

  

  

  ngOnInit() {}

  newCandidat(): void {
    this.submitted = false;
    this.candidat = new Candidat();
    }
    save() {
      this.candidat = new Candidat();
    }
    onSubmit() {
      this.submitted = true;
      this.save();
    }
}
