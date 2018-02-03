import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryDetailComponent } from './battery-detail.component';

describe('BatteryDetailComponent', () => {
  let component: BatteryDetailComponent;
  let fixture: ComponentFixture<BatteryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
