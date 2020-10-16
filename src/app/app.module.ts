import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControlDirective } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { AdminNavBarComponent } from './components/admin/common/admin-nav-bar/admin-nav-bar.component';
import { AdminLoginComponent } from './components/admin/pages/admin-login/admin-login.component';
import { AdminPanelComponent } from './components/admin/pages/admin-panel/admin-panel.component';
import { AddDocComponent } from './components/admin/pages/add-doc/add-doc.component';
import { AddLabComponent } from './components/admin/pages/add-lab/add-lab.component';
import { AddPatientComponent } from './components/admin/pages/add-patient/add-patient.component';

import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { DoctorNavComponent } from './components/user/pages/doctor/common/doctor-nav/doctor-nav.component';
import { LabNavComponent } from './components/user/pages/lab/common/lab-nav/lab-nav.component';
import { PatientNavComponent } from './components/user/pages/patient/common/patient-nav/patient-nav.component';

import { DoctorPanelComponent } from './components/user/pages/doctor/pages/doctor-panel/doctor-panel.component';
import { MyPatientsComponent } from './components/user/pages/doctor/pages/my-patients/my-patients.component';
import { MyreportsComponent } from './components/user/pages/doctor/pages/myreports/myreports.component';
import { AppointmentsComponent } from './components/user/pages/doctor/pages/appointments/appointments.component';
import { PatientPanelComponent } from './components/user/pages/patient/pages/patient-panel/patient-panel.component';
import { NewAppointmentComponent } from './components/user/pages/patient/pages/new-appointment/new-appointment.component';
import { ScanReportComponent } from './components/user/pages/patient/pages/scan-report/scan-report.component';
import { MedicalReportComponent } from './components/user/pages/patient/pages/medical-report/medical-report.component';
import { LabPanelComponent } from './components/user/pages/lab/pages/lab-panel/lab-panel.component';
import { NewReportComponent } from './components/user/pages/lab/pages/new-report/new-report.component';



export const routes:Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
   
  
  
    
    AdminNavBarComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    AddDocComponent,
    AddLabComponent,
    AddPatientComponent,

    UserLoginComponent,
    DoctorNavComponent,
    LabNavComponent,
    PatientNavComponent,

    DoctorPanelComponent,
    MyPatientsComponent,
    MyreportsComponent,
    AppointmentsComponent,
    
    PatientPanelComponent,
    NewAppointmentComponent,
    ScanReportComponent,
    MedicalReportComponent,
    
    LabPanelComponent,
    NewReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
