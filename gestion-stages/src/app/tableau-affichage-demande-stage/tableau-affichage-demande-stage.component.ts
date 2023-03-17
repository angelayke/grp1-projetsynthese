import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { STAGESREQUESTS } from '../mock-data/mock-stagesRequest';
import { MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

import {AfterViewInit} from '@angular/core';
import { StagesRequest } from '../models/stagesRequests';
import { StagesRequestService } from '../services/stages-request.service';
import { DetailsStagesRequestComponent } from '../details-stages-request/details-stages-request.component';

@Component({
  selector: 'app-tableau-affichage-demande-stage',
  templateUrl: './tableau-affichage-demande-stage.component.html',
  styleUrls: ['./tableau-affichage-demande-stage.component.scss']
})
export class TableauAffichageDemandeStageComponent implements OnInit {
  displayedColumns: string[] = ['titre', 'name', 'startDate', 'actions'];
  // dataSource = new MatTableDataSource(STAGESREQUESTS);
  // dataSourceStage = new MatTableDataSource(STAGESREQUESTS);
  dataSourceStage = new MatTableDataSource<StagesRequest>([]);
  // dataSource:  MatTableDataSource<StagesRequest> = new  MatTableDataSource;

  stagesRequests: StagesRequest[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableStageRequest!: MatTable<StagesRequest>;

  // constructor(public dialog: MatDialog, private stagesRequestService: StagesRequestService) {
  //   this.stagesRequests = STAGESREQUESTS;
  //  }

  constructor(public dialog: MatDialog, private stagesRequestService: StagesRequestService) {
    this.stagesRequests = [];
  }

   ngAfterViewInit() {

  }



  ngOnInit(): void {
    // this.dataSourceStage = new MatTableDataSource(STAGESREQUESTS);
    // this.dataSourceStage.paginator = this.paginator;
    // this.dataSourceStage.sort = this.sort;
    // // this.tableStageRequest.renderRows();
    // console.log(this.dataSourceStage)

    // this.stagesRequestService.getStagesRequests().subscribe(data => {
    //   this.stagesRequests = data;
    //   this.dataSourceStage.data = data;
    //   this.dataSourceStage.paginator = this.paginator;
    //   this.dataSourceStage.sort = this.sort;
    //   console.log(this.dataSourceStage.data)
    // });

    this.stagesRequestService.getStagesRequests().subscribe((stagesRequests) => {
      this.stagesRequests = stagesRequests;
      this.dataSourceStage = new MatTableDataSource(this.stagesRequests);
      this.dataSourceStage.paginator = this.paginator;
      this.dataSourceStage.sort = this.sort;
    });

  }

  // refuserStage(stage: any) {
  //   stage.active = false;
  //   console.log("result",  stage.active)
  //   }
  refuserStage(stage: StagesRequest) {
    stage.active = false;
    console.log("result",  stage.active)
    }

    // accepterStage(stage: any) {
    //   stage.active = true;
    //   console.log("result",  stage.active)
    //   }
    accepterStage(stage: StagesRequest) {
      stage.active = true;
      console.log("result",  stage.active)
      }

      validerToutesDemandes(){
        this.dataSourceStage.data.forEach(stage => {
          stage.active = true;
        });
        console.log("Toutes les demandes ont été validées!");
        alert("Toutes les demandes ont été validées!")

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
            this.deleteStagesRequest(_id);
          }
        });
      }

      deleteStagesRequest(_id: string) {
        // Appel au service pour supprimer le stage avec l'ID spécifié
        // this.stagesRequestService.deleteStagesRequest(_id);
        this.stagesRequestService.deleteStagesRequest(_id);
        // Mettre à jour la liste des stages dans le composant
        this.dataSourceStage.data = this.dataSourceStage.data.filter(stage => stage._id !== _id);
        // Mettre à jour la table
        this.tableStageRequest.renderRows();
      }

      // visualiserDemande(_id: string) {
      //     const stagesRequest = this.stagesRequestService.getStagesRequestById(_id);
      //     // ouvrir un dialogue ou une nouvelle page pour afficher les détails de la demande de stage

      // }


      openDetailsDialog(_id: string) {
        const dialogRef = this.dialog.open(DetailsStagesRequestComponent, {
          width: '600px',
          data: { _id: _id },
        });
      }





      modifierDemande(stage: StagesRequest) {
        const dialogRef = this.dialog.open(DetailsStagesRequestComponent, {
          width: '600px',
          data: { stage: stage },
        });

        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            // Mettre à jour la demande de stage dans la base de données
            this.stagesRequestService.updateStagesRequest(result).subscribe(() => {
              // Mettre à jour la liste des demandes de stage dans le composant
              this.stagesRequests = this.stagesRequests.map((s) =>
                s._id === result._id ? result : s
              );
              // Rafraîchir la table
              this.tableStageRequest.renderRows();
            });
          }
        });
      }

}



