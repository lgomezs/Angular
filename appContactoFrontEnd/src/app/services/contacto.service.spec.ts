import { TestBed, inject } from '@angular/core/testing';

import { ContactoService } from './contacto.service';

describe('ContactoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactoService]
    });
  });

  it('should be created', inject([ContactoService], (service: ContactoService) => {
    expect(service).toBeTruthy();
  }));
});
