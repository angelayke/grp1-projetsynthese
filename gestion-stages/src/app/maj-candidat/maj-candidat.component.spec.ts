import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajCandidatComponent } from './maj-candidat.component';

describe('MajCandidatComponent', () => {
  let component: MajCandidatComponent;
  let fixture: ComponentFixture<MajCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
