import { DemandesStagesService } from './../services/demandes-stages.service';

import { Component, OnInit, ViewChild,  AfterViewInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { STAGES } from '../mock-stages';
import { Stage } from '../stage';
import { DetailsStagesRequestComponent } from '../details-stages-request/details-stages-request.component';


@Component({
  selector: 'app-dernieres-demandes-stages',
  templateUrl: './dernieres-demandes-stages.component.html',
  styleUrls: ['./dernieres-demandes-stages.component.scss']
})
export class DernieresDemandesStagesComponent implements OnInit {
  displayedColumns: string[] = ['title', 'activitySector','startDate', 'actions'];

  dataSource:  MatTableDataSource<Stage> = new  MatTableDataSource(STAGES);

  demandesStages: Stage[]=[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableDemandeStage!: MatTable<Stage>;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

  }

  constructor(public dialog: MatDialog, private demandeStageService: DemandesStagesService) {
    this.demandesStages = [];
  }

  ngOnInit(): void {

    this.demandeStageService.getDemandesStages().subscribe((demandesStages) => {
      this.demandesStages = demandesStages;
      this.dataSource = new MatTableDataSource(this.demandesStages);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }


  validerToutesDemandes(){
    this.dataSource.data.forEach(stage => {
      stage.active = true;
    });
    console.log("Toutes les demandes ont été validées!");
    alert("Toutes les demandes ont été validées!")

  }

    refuserStage(stage:any) {
      stage.active = false;
      console.log("result",  stage.active)
    }
    accepterStage(stage:any) {
      stage.active = true;
      console.log("result",  stage.active)
    }


    deleteStage(_id: string): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '400px',
        data: { itemId: _id },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // effectuer la suppression
          console.log("Juste pour tester");
          this.deleteDemandeStages(_id);
        }
      });
    }


    deleteDemandeStages(_id: string) {
      // Appel au service pour supprimer le stage avec l'ID spécifié
      // this.stagesRequestService.deleteStagesRequest(_id);
      this.demandeStageService.deleteDemandeStages(_id);
      // Mettre à jour la liste des stages dans le composant
      this.dataSource.data = this.dataSource.data.filter(stage => stage._id !== _id);
      // Mettre à jour la table
      this.tableDemandeStage.renderRows();
    }

    openDetailsDialog(_id: string) {
      const dialogRef = this.dialog.open(DetailsStagesRequestComponent, {
        width: '600px',
        data: { _id: _id },
      });
    }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
