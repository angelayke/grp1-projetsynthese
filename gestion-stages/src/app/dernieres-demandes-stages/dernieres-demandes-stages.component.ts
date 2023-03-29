import { DemandesStagesService } from './../services/demandes-stages.service';

import { Component, OnInit, ViewChild,  AfterViewInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { DEMANDESTAGES } from '../mock-demandeStages';
import { DemandeStage } from '../demandeStage';
import { DetailsStagesRequestComponent } from '../details-stages-request/details-stages-request.component';
import { DialogModifierStageComponent } from '../dialog-modifier-stage/dialog-modifier-stage.component';


@Component({
  selector: 'app-dernieres-demandes-stages',
  templateUrl: './dernieres-demandes-stages.component.html',
  styleUrls: ['./dernieres-demandes-stages.component.scss']
})
export class DernieresDemandesStagesComponent implements OnInit {
  displayedColumns: string[] = ['titre', 'activitySector','startDate', 'actions'];

  dataSource:  MatTableDataSource<DemandeStage> = new  MatTableDataSource(DEMANDESTAGES);
  // dataSource:  MatTableDataSource<Stage> = new  MatTableDataSource();

  demandesStages: DemandeStage[]=[];

  newStage: DemandeStage = {
    _id: '',
    createdAt: '',
    updatedAt: '',
    titre: '',
    description: '',
    startDate: '',
    endDate: '',
    program: '',
    requirements: '',
    stageType: {
      __typename: '',
      label: '',
      value: ''
    },
    hoursPerWeek: 0,
    additionalInfo: '',
    paid: false,
    published: false,
    skills: {
      __typename: '',
      label: '',
      value: ''
    },
    active: false,
    region: {
      __typename: '',
      label: '',
      value: ''
    },
    activitySector: '',
    city: '',
    resume: '',
    enterprise: {
      _id: '',
      createdAt: '',
      updatedAt: '',
      name: '',
      description: '',
      imageUrl: '',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      published: true
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableDemandeStage!: MatTable<DemandeStage>;

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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


    onDeleteClick(stage: DemandeStage): void {
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

    openDetailsDialog(stage: DemandeStage) {
      const dialogRef = this.dialog.open(DetailsStagesRequestComponent, {
        width: '600px',
        data: { stage },
      });
    }





    stages = DEMANDESTAGES; // Utiliser les données du tableau

    openDialog(stage: DemandeStage): void {
      const dialogRef = this.dialog.open(DialogModifierStageComponent, {
        width: '500px',
        data: {...stage} // Passer les données du stage à modifier
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Mettre à jour les données du stage avec les données modifiées
          const index = this.stages.findIndex(s => s._id === result.id);
          this.stages[index] = {...result};
        }
      });
    }











}
