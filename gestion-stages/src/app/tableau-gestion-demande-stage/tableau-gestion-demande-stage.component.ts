import { Component, OnInit, ViewChild,  AfterViewInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { DetailsStagesRequestComponent } from '../details-stages-request/details-stages-request.component';
import { DialogModifierStageComponent } from '../dialog-modifier-stage/dialog-modifier-stage.component';
import { STAGES } from '../mock-stages';
import { DemandesStagesService } from '../services/demandes-stages.service';
import { Stage } from '../stage';


@Component({
  selector: 'app-tableau-gestion-demande-stage',
  templateUrl: './tableau-gestion-demande-stage.component.html',
  styleUrls: ['./tableau-gestion-demande-stage.component.scss']
})
export class TableauGestionDemandeStageComponent implements OnInit {
  displayedColumns: string[] = ['title', 'activitySector', 'region','startDate', 'actions'];

  // stages=STAGES;
  dataSource:  MatTableDataSource<Stage> = new  MatTableDataSource(STAGES);

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
  selectedStage!: Stage;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  constructor(public dialog: MatDialog, private demandeStageService: DemandesStagesService, private router: Router) {
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





  stages = STAGES; // Utiliser les données du tableau

  openDialog(stage: Stage): void {
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


  afficherDetails(stage: Stage){
    this.newStage = stage;
    this.router.navigate(['/sidenav/fiche-demande-stage', stage._id]);

  }




}
