import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireOffreEditionComponent } from './formulaire-offre-edition.component';

describe('FormulaireOffreEditionComponent', () => {
  let component: FormulaireOffreEditionComponent;
  let fixture: ComponentFixture<FormulaireOffreEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireOffreEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireOffreEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
