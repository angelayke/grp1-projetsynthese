import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDemandeStageComponent } from './fiche-demande-stage.component';

describe('FicheDemandeStageComponent', () => {
  let component: FicheDemandeStageComponent;
  let fixture: ComponentFixture<FicheDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDemandeStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
