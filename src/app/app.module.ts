import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { SearchEngineCarComponent } from './search-engine-car/search-engine-car.component';
import { CarResultComponent } from './car-result/car-result.component';
import { CarSortingComponent } from './car-sorting/car-sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchEngineCarComponent,
    CarResultComponent,
    CarSortingComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
