import { Component, OnInit } from '@angular/core';

import { Battery } from '../battery';
import { BatteryService } from '../battery.service';

@Component({
  selector: 'app-batteries',
  templateUrl: './batteries.component.html',
  styleUrls: ['./batteries.component.css']
})
export class BatteriesComponent implements OnInit {
  batteries: Battery[];

  constructor(private batteryService: BatteryService) { }

  ngOnInit() {
    this.getBatteries();
  }
  //retrieves batteries
  getBatteries(): void {
    this.batteryService.getBatteries()
    .subscribe(batteries => this.batteries = batteries);
  }
  //creates battery on list
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.batteryService.addBattery({ name } as Battery)
      .subscribe(battery => {
        this.batteries.push(battery);
      });
  }
  //deletes selected battery
  delete(battery: Battery): void {
    this.batteries = this.batteries.filter(h => h !== battery);
    this.batteryService.deleteBattery(battery).subscribe();
  }

}
