import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { StreamService } from './stream.service';

describe('StreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [StreamService],
    });
  });

  it('should be created', inject([StreamService], (service: StreamService) => {
    expect(service).toBeTruthy();
  }));
});
