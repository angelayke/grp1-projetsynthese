import { Component, OnInit, Input } from '@angular/core';
import { Entreprise } from '../entreprises';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent implements OnInit {
  @Input() entreprise?: Entreprise;

  constructor() { }

  ngOnInit(): void {
  }

}
