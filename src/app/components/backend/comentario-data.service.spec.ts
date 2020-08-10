import { TestBed } from '@angular/core/testing';

import { ComentarioDataService } from './comentario-data.service';

describe('ContatoDataService', () => {
  let service: ComentarioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentarioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
