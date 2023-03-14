import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAffichageDemandeStageComponent } from './tableau-affichage-demande-stage.component';

describe('TableauAffichageDemandeStageComponent', () => {
  let component: TableauAffichageDemandeStageComponent;
  let fixture: ComponentFixture<TableauAffichageDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauAffichageDemandeStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauAffichageDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
