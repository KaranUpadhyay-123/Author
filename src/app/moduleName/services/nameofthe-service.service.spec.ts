import { TestBed } from '@angular/core/testing';

import { NameoftheServiceService } from './nameofthe-service.service';

describe('NameoftheServiceService', () => {
  let service: NameoftheServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameoftheServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
