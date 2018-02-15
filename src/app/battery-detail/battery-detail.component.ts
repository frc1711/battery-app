import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Battery }         from '../battery';
import { BatteryService }  from '../battery.service';
//import { }
@Component({
  selector: 'app-battery-detail',
  templateUrl: './battery-detail.component.html',
  styleUrls: [ './battery-detail.component.css' ]
})
export class BatteryDetailComponent implements OnInit {
  @Input() battery: Battery;

  constructor(
    private route: ActivatedRoute,
    private batteryService: BatteryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBattery();
  }
  //Retrieves batteries and their information 
  getBattery(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.batteryService.getBattery(id)
      .subscribe(battery => this.battery = battery);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.batteryService.updateBattery(this.battery)
      .subscribe(() => this.goBack());
  }
}
