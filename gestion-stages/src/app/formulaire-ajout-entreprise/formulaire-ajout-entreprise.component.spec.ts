import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjoutEntrepriseComponent } from './formulaire-ajout-entreprise.component';

describe('FormulaireAjoutEntrepriseComponent', () => {
  let component: FormulaireAjoutEntrepriseComponent;
  let fixture: ComponentFixture<FormulaireAjoutEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAjoutEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireAjoutEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
