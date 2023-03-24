import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheOffreStageComponent } from './fiche-offre-stage.component';

describe('FicheOffreStageComponent', () => {
  let component: FicheOffreStageComponent;
  let fixture: ComponentFixture<FicheOffreStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheOffreStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheOffreStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
