import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Battery } from '../battery';
import { BatteryService } from '../battery.service';

@Component({
  selector: 'app-battery-search',
  templateUrl: './battery-search.component.html',
  styleUrls: [ './battery-search.component.css' ]
})

export class BatterySearchComponent implements OnInit {
  //batteries is observable, not array
  batteries$: Observable<Battery[]>;
  private searchTerms = new Subject<string>();

  constructor(private batteryService: BatteryService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.batteries$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.batteryService.searchBatteries(term)),
    );
  }
}
