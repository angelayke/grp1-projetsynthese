import { Component, Input, OnInit } from '@angular/core';
import {CANDIDATS} from '../mock-candidat';
import { ApiResponse, Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maj-candidat',
  templateUrl: './maj-candidat.component.html',
  styleUrls: ['./maj-candidat.component.scss']
})
export class MajCandidatComponent implements OnInit {
  candidats=CANDIDATS

  public loading: boolean = false;
  public candidatId: string | null = null;
  // public candidat: Candidat = {} as Candidat;
  public candidat: any;
  public errorMessage : string | null = null;
  // @Input() candidat: Candidat = {
    newCandidat: Candidat = {

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

  constructor(private activatedRoute:ActivatedRoute,private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.candidatId = param.get('candidatId');

      });
      if(this.candidatId){
        this.candidatService.getCandidat(this.candidatId).subscribe((data: ApiResponse<Candidat[]>) => {
        this.candidat = data.data;
        this.loading =false;
        }, (error) => {
          this.errorMessage = error;
          this.loading = false;
        })
      }


  }

/* jai mis la meme chose que dans ajout*/
//   AjoutCandidat(): void {
//     this.candidat._id = "930c92da2319965dfe3882b9";

//     }
//     Test(): void {
//       console.log(this.candidat)
// }





  }
