import { TestBed } from '@angular/core/testing';

import { StagesRequestService } from './stages-request.service';

describe('StagesRequestService', () => {
  let service: StagesRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagesRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
