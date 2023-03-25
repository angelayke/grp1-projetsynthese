import { TestBed } from '@angular/core/testing';

import { DemandesStagesService } from './demandes-stages.service';

describe('DemandesStagesService', () => {
  let service: DemandesStagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandesStagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
