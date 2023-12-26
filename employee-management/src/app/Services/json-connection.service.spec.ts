import { TestBed } from '@angular/core/testing';

import { JsonConnectionService } from './json-connection.service';

describe('JsonConnectionService', () => {
  let service: JsonConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
