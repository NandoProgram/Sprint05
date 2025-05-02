import { TestBed } from '@angular/core/testing';

import { CuadrosService } from './cuadros.service';

describe('CuadrosService', () => {
  let service: CuadrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuadrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
