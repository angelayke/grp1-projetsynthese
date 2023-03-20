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
  // dataSource:  MatTableDataSource<Stage> = new  MatTableDataSource();

  demandesStages: Stage[]=[];

  newStage: Stage = {
    _id: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    title: "",
    startDate: "",
    endDate: "",
    program: "",
    region: "",
    requirements: "",
    stageType: "",
    hoursPerWeek: 0,
    additionalInfo: "",
    paid: true,
    published: false,
    active: true,
    activitySector: ""
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableDemandeStage!: MatTable<Stage>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

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
      console.log("Récupération des données:",  this.demandesStages)
      console.log("Récupération des données dans le filteredData du tableau:",    this.dataSource.data)
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


    onDeleteClick(stage: Stage): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '400px',
        data: { itemId: stage._id},
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // effectuer la suppression
          // Si l'utilisateur confirme la suppresion, supprimez l'élément du tableau de données
          this.dataSource.data = this.dataSource.data.filter(item => item !== stage)
          console.log("Juste pour tester",   this.dataSource.data);

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

    openDetailsDialog(stage: Stage) {
      const dialogRef = this.dialog.open(DetailsStagesRequestComponent, {
        width: '600px',
        data: { stage },
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
