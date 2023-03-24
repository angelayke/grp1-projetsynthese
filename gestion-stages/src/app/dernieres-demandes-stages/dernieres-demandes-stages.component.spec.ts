import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernieresDemandesStagesComponent } from './dernieres-demandes-stages.component';

describe('DernieresDemandesStagesComponent', () => {
  let component: DernieresDemandesStagesComponent;
  let fixture: ComponentFixture<DernieresDemandesStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DernieresDemandesStagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DernieresDemandesStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
