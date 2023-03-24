import { Component, OnInit,Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modifier-stage',
  templateUrl: './dialog-modifier-stage.component.html',
  styleUrls: ['./dialog-modifier-stage.component.scss']
})
export class DialogModifierStageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogModifierStageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

  isDataValid(): boolean {
    return !this.data.title || !this.data.activitySector || !this.data.startDate;
  }

  onSaveClick(): void {
    if (this.isDataValid()) {
      return;
    }
    // Envoyer les données modifiées au composant parent pour mise à jour
    this.dialogRef.close(this.data);
  }

}
