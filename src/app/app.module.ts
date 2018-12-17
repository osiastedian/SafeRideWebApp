import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule} from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TripSelectorComponent } from './trip-selector/trip-selector.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TripSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'SafeRidePHWebViewer'),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({apiKey: environment.googleMaps}),
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
