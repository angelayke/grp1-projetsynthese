import { Component, OnInit, Input } from '@angular/core';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-ajout-candidat',
  templateUrl: './ajout-candidat.component.html',
  styleUrls: ['./ajout-candidat.component.scss']
})
export class AjoutCandidatComponent implements OnInit {
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
constructor(private CandidatService: CandidatService) {}

  ngOnInit(): void {}

  AjoutCandidat(): void {
    this.candidat._id = "930c92da2319965dfe3882b9";
   
    }
    Test(): void {
      console.log(this.candidat)
}
}