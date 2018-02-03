import { TestBed, inject } from '@angular/core/testing';

import { BatteryService } from './battery.service';

describe('BatteryoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatteryService]
    });
  });

  it('should be created', inject([BatteruyService], (service: BatteryService) => {
    expect(service).toBeTruthy();
  }));
});
