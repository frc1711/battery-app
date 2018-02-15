import { Component, OnInit } from '@angular/core';
import { Battery } from '../battery';
import { BatteryService } from '../battery.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  batteries: Battery[] = [];

  constructor(private batteryService: BatteryService) { }

  ngOnInit() {
    this.getBatteries();
  }
  //This retrieves the first three batteries (I think.)
  getBatteries(): void {
    this.batteryService.getBatteries()
      .subscribe(batteries => this.batteries = batteries.slice(1, 5)); 
  }
}
