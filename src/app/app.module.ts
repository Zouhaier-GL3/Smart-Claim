import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { MatTableModule } from '@angular/material/table';
import { TableItemComponent } from './table-item/table-item.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { SideListComponent } from './side-list/side-list.component';

import { ProductService } from './table/productservice.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PaginatorModule} from 'primeng/paginator';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import {MatRadioModule} from '@angular/material/radio';
import { DashboardComponent } from './dashboard/dashboard.component';

import {CheckboxModule} from 'primeng/checkbox';
import { AgentSaisieComponent } from './agent-saisie/agent-saisie.component';
import {DataService} from './data.service'
import { RestApiService } from './rest-api.service';
import { AuthGuardService } from './auth-guard.service';
import { SharedService } from './shared.service';
import { AddConstatComponent } from './add-constat/add-constat.component';
import { MatStepperModule } from '@angular/material/stepper';
import { PinshZoomComponent } from './pinsh-zoom/pinsh-zoom.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';
import { ExpertComponent } from './expert/expert.component';
import { ExpertVisioComponent } from './expert-visio/expert-visio.component';
import { ExpertTerrainComponent } from './expert-terrain/expert-terrain.component';
import { MatNativeDateModule } from '@angular/material/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ExpertDevisComponent } from './expert-devis/expert-devis.component';
import { ExpertReparationComponent } from './expert-reparation/expert-reparation.component';
import { ExpertReparationTerrainComponent } from './expert-reparation-terrain/expert-reparation-terrain.component';
import { OutServiceComponent } from './out-service/out-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    TableItemComponent,
    TableComponent,
    SideListComponent,
    DashboardComponent,
    AgentSaisieComponent,
    AddConstatComponent,
    PinshZoomComponent,
    MessageComponent,
    ProfileComponent,
    RegistrationComponent,
    SettingsComponent,
    ExpertComponent,
    ExpertVisioComponent,
    ExpertTerrainComponent,
    ExpertDevisComponent,
    ExpertReparationComponent,
    ExpertReparationTerrainComponent,
    OutServiceComponent,
    
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    TableModule,
    MDBBootstrapModule,
    MatTableModule,
    HttpClientModule,
    NgbModule,
    PaginatorModule,
    AvatarModule,
    AvatarGroupModule,
    DialogModule,
    ButtonModule,
    DynamicDialogModule,
    ToastModule,
    MatRadioModule,
    CheckboxModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
  
    MatFormFieldModule,
   
    CommonModule,

    
  ],
  providers: [ProductService,RestApiService,AuthGuardService,SharedService,DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
