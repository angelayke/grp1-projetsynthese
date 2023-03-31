import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeCardsComponent } from './groupe-cards.component';

describe('GroupeCardsComponent', () => {
  let component: GroupeCardsComponent;
  let fixture: ComponentFixture<GroupeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
