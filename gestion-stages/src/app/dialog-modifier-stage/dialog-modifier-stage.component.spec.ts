import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModifierStageComponent } from './dialog-modifier-stage.component';

describe('DialogModifierStageComponent', () => {
  let component: DialogModifierStageComponent;
  let fixture: ComponentFixture<DialogModifierStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModifierStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogModifierStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
