import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauGestionDemandeStageComponent } from './tableau-gestion-demande-stage.component';

describe('TableauGestionDemandeStageComponent', () => {
  let component: TableauGestionDemandeStageComponent;
  let fixture: ComponentFixture<TableauGestionDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauGestionDemandeStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauGestionDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
