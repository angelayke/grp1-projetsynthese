import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireOffreAjoutComponent } from './formulaire-offre-ajout.component';

describe('FormulaireOffreAjoutComponent', () => {
  let component: FormulaireOffreAjoutComponent;
  let fixture: ComponentFixture<FormulaireOffreAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireOffreAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireOffreAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
