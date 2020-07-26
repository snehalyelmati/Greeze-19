import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {UserComponent} from './user/user.component';
import {HospitalDetailComponent} from './home/hospital-detail/hospital-detail.component';
import {ManageHospitalsComponent} from './manage-hospitals/manage-hospitals.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'user', component: UserComponent},
  {path: 'hospital-detail', component: HospitalDetailComponent, pathMatch: 'full'},
  {path: 'manage-hospitals', component: ManageHospitalsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
