import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCandidatComponent } from './modal-candidat.component';

describe('ModalCandidatComponent', () => {
  let component: ModalCandidatComponent;
  let fixture: ComponentFixture<ModalCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
