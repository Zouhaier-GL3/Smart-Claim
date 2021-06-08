// import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentSaisieComponent } from './agent-saisie/agent-saisie.component';
import { LoginComponent } from './login/login.component';
import { TableItemComponent } from './table-item/table-item.component';
import {DataService} from './data.service'
import { SettingsComponent } from './settings/settings.component';
import { AuthGuardService } from './auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { ExpertComponent } from './expert/expert.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpertVisioComponent } from './expert-visio/expert-visio.component';
import { ExpertTerrainComponent } from './expert-terrain/expert-terrain.component';
import { ExpertDevisComponent } from './expert-devis/expert-devis.component';
import { ExpertReparationComponent } from './expert-reparation/expert-reparation.component';
import { ExpertReparationTerrainComponent } from './expert-reparation-terrain/expert-reparation-terrain.component';
import { OutServiceComponent } from './out-service/out-service.component';
// import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

    // children : [
    //   {
    //     path : 'login',
    //     component : LoginComponent
    //   }
    // ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService],
  },


  {
    path: 'agent',
    component: AgentSaisieComponent,
  },
  {
    path: 'expert',
    component: ExpertComponent,
  },
  {
    path: 'visio',
    component: ExpertVisioComponent,
  },
  {
    path: 'terrain',
    component: ExpertTerrainComponent,
  },
  {
    path: 'devis',
    component: ExpertDevisComponent,
  },
  {
    path: 'reparation',
    component: ExpertReparationComponent,
  },
  {
    path: 'repter',
    component: ExpertReparationTerrainComponent,
  },
  {
    path: 'out',
    component: OutServiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
