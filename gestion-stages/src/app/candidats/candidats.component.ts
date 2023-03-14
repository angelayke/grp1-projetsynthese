import { Component, OnInit } from '@angular/core';
import {CANDIDATS} from '../mock-candidat';


@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.scss']
})
export class CandidatsComponent implements OnInit {
candidats=CANDIDATS

  constructor() { }

  ngOnInit(): void {
  }

}
