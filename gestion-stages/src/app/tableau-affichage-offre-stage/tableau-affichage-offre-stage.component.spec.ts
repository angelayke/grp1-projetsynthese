import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAffichageOffreStageComponent } from './tableau-affichage-offre-stage.component';

describe('TableauAffichageOffreStageComponent', () => {
  let component: TableauAffichageOffreStageComponent;
  let fixture: ComponentFixture<TableauAffichageOffreStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauAffichageOffreStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauAffichageOffreStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
