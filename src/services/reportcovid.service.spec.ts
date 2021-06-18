import { TestBed } from '@angular/core/testing';

import { ReportcovidService } from './reportcovid.service';

describe('ReportcovidService', () => {
  let service: ReportcovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportcovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
