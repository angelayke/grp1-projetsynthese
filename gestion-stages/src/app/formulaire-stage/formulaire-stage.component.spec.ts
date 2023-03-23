import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireStageComponent } from './formulaire-stage.component';

describe('FormulaireStageComponent', () => {
  let component: FormulaireStageComponent;
  let fixture: ComponentFixture<FormulaireStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
