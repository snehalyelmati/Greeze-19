import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HospitalsComponent } from './home/hospitals/hospitals.component';
import { CovidMapComponent } from './home/covid-map/covid-map.component';
import { HospitalComponent } from './home/hospitals/hospital/hospital.component';
import { HospitalDetailComponent } from './home/hospital-detail/hospital-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { ManageHospitalsComponent } from './manage-hospitals/manage-hospitals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AuthComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    HospitalsComponent,
    CovidMapComponent,
    HospitalComponent,
    HospitalDetailComponent,
    ManageHospitalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
