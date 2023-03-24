import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireUpdateEntrepriseComponent } from './formulaire-update-entreprise.component';

describe('FormulaireUpdateEntrepriseComponent', () => {
  let component: FormulaireUpdateEntrepriseComponent;
  let fixture: ComponentFixture<FormulaireUpdateEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireUpdateEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireUpdateEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
