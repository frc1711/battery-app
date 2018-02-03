import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BatteryDetailComponent }  from './battery-detail/battery-detail.component';
import { BatteriesComponent }      from './batteries/batteries.component';
import { BatterySearchComponent }  from './battery-search/battery-search.component';
import { BatteryService }          from './battery.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BatteriesComponent,
    BatteryDetailComponent,
    MessagesComponent,
    BatterySearchComponent
  ],
  providers: [ BatteryService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
