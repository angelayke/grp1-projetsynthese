import { Component, OnInit } from '@angular/core';
import {CANDIDATS} from '../mock-candidat';

@Component({
  selector: 'app-maj-candidat',
  templateUrl: './maj-candidat.component.html',
  styleUrls: ['./maj-candidat.component.scss']
})
export class MajCandidatComponent implements OnInit {
  candidats=CANDIDATS

  constructor() { }

  ngOnInit(): void {
  }

  }