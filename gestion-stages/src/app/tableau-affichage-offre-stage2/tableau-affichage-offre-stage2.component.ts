import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { DetailsStagesRequestComponent } from '../details-stages-request/details-stages-request.component';
import { DialogModifierStageComponent } from '../dialog-modifier-stage/dialog-modifier-stage.component';
// import { DEMANDESTAGES } from '../mock-demandeStages';
// import { DemandesStagesService } from '../services/demandes-stages.service';
// import { DemandeStage } from '../demandeStage';
import { STAGES } from '../mock-stages';
import { Stage } from '../stage';
import { StagesService } from '../services/stages.service';


// export interface OffreStage {
//   profil: string;
//   etablissement: string;
//   date: string;
//   actions: string;
// }


// const OFFRESTAGE: OffreStage[] = [
//   {profil: 'Intégrateur Web', etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03', actions: 'H'},
//   {profil: 'Intégrateur Web', etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03', actions: 'He'},
//   {profil: 'Intégrateur Web', etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03', actions: 'Li'},
//   {profil: 'Intégrateur Web', etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03', actions: 'Be'},
//   {profil: 'Intégrateur Web', etablissement: 'Cégep de Trois-Rivières', date: '2022-03-03', actions: 'B'},
// ];


@Component({
  selector: 'app-tableau-affichage-offre-stage2',
  templateUrl: './tableau-affichage-offre-stage2.component.html',
  styleUrls: ['./tableau-affichage-offre-stage2.component.scss']
})
export class TableauAffichageOffreStage2Component {
  displayedColumns: string[] = ['poste', 'secteur', 'region', 'date', 'actions'];
  
  // dataSource = OFFRESTAGE;
  dataSource:  MatTableDataSource<Stage> = new  MatTableDataSource(STAGES);

  
  Stages: Stage[]=[];

  newStage: Stage = {
    _id: '',
    createdAt: '',
    updatedAt: '',
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    program: '',
    requirements: '',
    stageType: '',
    hoursPerWeek: 0,
    additionalInfo: '',
    paid: true,
    published: false,
    active: true,
    enterprise: ""   
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableStage!: MatTable<Stage>;
  selectedStage!: Stage;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  
  constructor(public dialog: MatDialog, private StageService: StagesService, private router: Router) {
    this.Stages = [];
   }


  ngOnInit(): void {

      this.StageService.getStages().subscribe((Stages) => {
      this.Stages = Stages;
      this.dataSource = new MatTableDataSource(this.Stages);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log("Récupération des données:",  this.Stages)
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
    this.StageService.deleteStage(_id);
    // Mettre à jour la liste des stages dans le composant
    this.dataSource.data = this.dataSource.data.filter(stage => stage._id !== _id);
    // Mettre à jour la table
    this.tableStage.renderRows();
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



  getInactiveStages(): Stage[] {
    return this.Stages.filter(stage => !stage.active);
  }

  showInactive() {
    this.dataSource = new MatTableDataSource(this.getInactiveStages());

  }


}

