import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterySearchComponent } from './battery-search.component';

describe('BatterySearchComponent', () => {
  let component: BatterySearchComponent;
  let fixture: ComponentFixture<BatterySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatterySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatterySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
