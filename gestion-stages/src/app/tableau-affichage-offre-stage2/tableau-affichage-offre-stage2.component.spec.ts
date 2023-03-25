import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAffichageOffreStage2Component } from './tableau-affichage-offre-stage2.component';

describe('TableauAffichageOffreStage2Component', () => {
  let component: TableauAffichageOffreStage2Component;
  let fixture: ComponentFixture<TableauAffichageOffreStage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauAffichageOffreStage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauAffichageOffreStage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
