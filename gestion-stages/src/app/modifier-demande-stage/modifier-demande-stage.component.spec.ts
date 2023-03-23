import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDemandeStageComponent } from './modifier-demande-stage.component';

describe('ModifierDemandeStageComponent', () => {
  let component: ModifierDemandeStageComponent;
  let fixture: ComponentFixture<ModifierDemandeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDemandeStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierDemandeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
