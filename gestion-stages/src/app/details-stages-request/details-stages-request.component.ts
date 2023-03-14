import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StagesRequest } from '../models/stagesRequests';
import { StagesRequestService } from '../services/stages-request.service';

@Component({
  selector: 'app-details-stages-request',
  templateUrl: './details-stages-request.component.html',
  styleUrls: ['./details-stages-request.component.scss']
})
export class DetailsStagesRequestComponent implements OnInit {

  stagesRequest: StagesRequest | undefined;
  constructor(public dialogRef: MatDialogRef<DetailsStagesRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private stagesRequestService: StagesRequestService) { }

  ngOnInit(): void {
    this.stagesRequestService.getStagesRequestById(this.data.id).subscribe((stagesRequest) => {
      this.stagesRequest = stagesRequest;
    });
  }

}
