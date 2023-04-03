import { Component, Input, OnInit } from '@angular/core';
import {CANDIDATS} from '../mock-candidat';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-maj-candidat',
  templateUrl: './maj-candidat.component.html',
  styleUrls: ['./maj-candidat.component.scss']
})
export class MajCandidatComponent implements OnInit {
  candidats=CANDIDATS
  @Input() candidat: Candidat = {
  
    _id: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    province: '',
    jobTitle: '',
    postalCode: '',
    city: '',
    name: '',
    description: '',
    address: '',
    published: true,
    phone: '',

};

  constructor(private CandidatService: CandidatService) { }

  ngOnInit(): void {
  }

/* jai mis la meme chose que dans ajout*/
  AjoutCandidat(): void {
    this.candidat._id = "930c92da2319965dfe3882b9";
   
    }
    Test(): void {
      console.log(this.candidat)
}
  }