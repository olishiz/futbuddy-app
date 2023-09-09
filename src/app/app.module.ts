import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NgCharts
import { NgChartsModule } from 'ng2-charts';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';


// ReactiveForms
import { ReactiveFormsModule } from '@angular/forms';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { BUCKET } from "@angular/fire/compat/storage";

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot({mode: 'ios'}),
        ReactiveFormsModule,
        AppRoutingModule,
        NgChartsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
        provideFunctions(() => getFunctions()),
        provideStorage(() => getStorage()),
    ],
    providers: [
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        ScreenTrackingService,
        UserTrackingService,
        {
            provide: FIREBASE_OPTIONS,
            useValue: environment.firebase
        },
        {
            provide: BUCKET,
            useValue: 'gs://futbuddy-kl.appspot.com/'
        }
    ],
    bootstrap: [AppComponent],
})

export class AppModule {
}
