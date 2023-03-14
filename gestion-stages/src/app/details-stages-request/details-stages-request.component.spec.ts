import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStagesRequestComponent } from './details-stages-request.component';

describe('DetailsStagesRequestComponent', () => {
  let component: DetailsStagesRequestComponent;
  let fixture: ComponentFixture<DetailsStagesRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsStagesRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsStagesRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
