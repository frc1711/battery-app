import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesComponent } from './batteries.component';

describe('BatteriesComponent', () => {
  let component: BatteriesComponent;
  let fixture: ComponentFixture<BatteriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
