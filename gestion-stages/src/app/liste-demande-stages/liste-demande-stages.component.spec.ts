import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeStagesComponent } from './liste-demande-stages.component';

describe('ListeDemandeStagesComponent', () => {
  let component: ListeDemandeStagesComponent;
  let fixture: ComponentFixture<ListeDemandeStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeStagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDemandeStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
