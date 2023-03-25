import { Component, OnInit } from '@angular/core';
import {CANDIDATS} from '../mock-candidat';
import { Candidat } from '../candidat';
@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.scss']
})
export class CandidatDetailsComponent implements OnInit {
  candidats=CANDIDATS

  constructor() { }

  ngOnInit(): void {
  }

}
