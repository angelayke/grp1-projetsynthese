import { Component, OnInit, Input } from '@angular/core';
import { Entreprise } from '../entreprises';
import { ENTREPRISES } from '../mock-entreprises';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent implements OnInit {
 entreprises=ENTREPRISES;

  constructor() { }

  ngOnInit(): void {
  }

}
