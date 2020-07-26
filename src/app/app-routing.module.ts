import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {UserComponent} from './user/user.component';
import {HospitalDetailComponent} from './home/hospital-detail/hospital-detail.component';
import {ManageHospitalsComponent} from './manage-hospitals/manage-hospitals.component';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'hospital-detail', component: HospitalDetailComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'manage-hospitals', component: ManageHospitalsComponent, pathMatch: 'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
