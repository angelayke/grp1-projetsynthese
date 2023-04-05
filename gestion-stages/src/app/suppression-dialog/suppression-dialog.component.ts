import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-suppression-dialog',
  templateUrl: './suppression-dialog.component.html',
  styleUrls: ['./suppression-dialog.component.scss']
})
export class SuppressionDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SuppressionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }) { }



    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(true);
    }


  ngOnInit(): void {
  }

}
