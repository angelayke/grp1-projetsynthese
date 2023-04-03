import { Component, OnInit, Input } from '@angular/core';
import { ApiResponse, Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';

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
constructor(private candidatService: CandidatService, private router: Router ) {}


public entreprise: Candidat = {} as Candidat;
public errorMessage: string | null = null;

  ngOnInit(): void {}

//   AjoutCandidat(): void {
//     this.candidat._id = "930c92da2319965dfe3882b9";

//     }

//     Test(): void {
//       console.log(this.candidat)
// }

createCandidat() {

    this.candidatService.createCandidat(this.candidat).subscribe((data :ApiResponse<Candidat[]>) => {
      console.log("data created:", data)
      this.router.navigate(['sidenav/tableaudebord']).then();
    },
    (error) => {
    this.errorMessage = error;
    this.router.navigate(['sidenav/tableaudebord/ajout-candidat']).then();
    });

}

}
