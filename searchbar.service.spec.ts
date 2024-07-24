import { TestBed } from '@angular/core/testing';

import { SearhbarService } from './searchbar.service';

describe('SearhbarService', () => {
  let service: SearhbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearhbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
