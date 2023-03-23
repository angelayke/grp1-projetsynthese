import { Component, OnInit, ViewChild,  AfterViewInit  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { STAGES } from '../mock-stages';
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  constructor() { }

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
