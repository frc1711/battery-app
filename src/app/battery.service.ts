import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Battery } from './battery';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BatteryService {

  private batteriesURL = 'api/batteries';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET batteries from the server */
  getBatteries (): Observable<Battery[]> {
    return this.http.get<Battery[]>(this.batteriesURL)
      .pipe(
        tap(batteries => this.log(`fetched batteries`)),
        catchError(this.handleError('getBatteries', []))
      );
  }

  /** GET battery by id. Return `undefined` when id not found */
  getBatteryNo404<Data>(id: number): Observable<Battery> {
    const url = `${this.batteriesURL}/?id=${id}`;
    return this.http.get<Battery[]>(url)
      .pipe(
        map(batteries => batteries[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} battery id=${id}`);
        }),
        catchError(this.handleError<Battery>(`getBattery id=${id}`))
      );
  }

  /** GET battery by id. Will 404 if id not found */
  getBattery(id: number): Observable<Battery> {
    const url = `${this.batteriesURL}/${id}`;
    return this.http.get<Battery>(url).pipe(
      tap(_ => this.log(`fetched battery id=${id}`)),
      catchError(this.handleError<Battery>(`getBattery id=${id}`))
    );
  }

  /* GET batteries whose name contains search term */
  searchBatteries(term: string): Observable<Battery[]> {
    if (!term.trim()) {
      // if not search term, return empty battery array.
      return of([]);
    }
    return this.http.get<Battery[]>(`api/batteries/?name=${term}`).pipe(
      tap(_ => this.log(`found batteries matching "${term}"`)),
      catchError(this.handleError<Battery[]>('searchBatteries', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new battery to the server */
  addBattery (battery: Battery): Observable<Battery> {
    return this.http.post<Battery>(this.batteriesURL, battery, httpOptions).pipe(
      tap((battery: Battery) => this.log(`added battery w/ id=${battery.id}`)),
      catchError(this.handleError<Battery>('addBattery'))
    );
  }

  /** DELETE: delete the battery from the server */
  deleteBattery (battery: Battery | number): Observable<Battery> {
    const id = typeof battery === 'number' ? battery : battery.id;
    const url = `${this.batteriesURL}/${id}`;

    return this.http.delete<Battery>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted battery id=${id}`)),
      catchError(this.handleError<Battery>('deleteBattery'))
    );
  }

  /** PUT: update the battery on the server */
  updateBattery (battery: Battery): Observable<any> {
    return this.http.put(this.batteriesURL, battery, httpOptions).pipe(
      tap(_ => this.log(`updated battery id=${battery.id}`)),
      catchError(this.handleError<any>('updateBattery'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a BatteryService message with the MessageService */
  private log(message: string) {
    this.messageService.add('BatteryService: ' + message);
  }
}
