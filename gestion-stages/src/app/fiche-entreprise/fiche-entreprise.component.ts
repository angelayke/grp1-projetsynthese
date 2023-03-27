import { Component, OnInit, Input } from '@angular/core';
import { Entreprise } from '../entreprises';
import { ENTREPRISES } from '../mock-entreprises';


@Component({
  selector: 'app-fiche-entreprise',
  templateUrl: './fiche-entreprise.component.html',
  styleUrls: ['./fiche-entreprise.component.scss']
})

export class FicheEntrepriseComponent implements OnInit {
  @Input() entreprise?: Entreprise;
  entreprises=ENTREPRISES;

  constructor() { }

  ngOnInit(): void {
  }

}
