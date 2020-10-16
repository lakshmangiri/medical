import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavBarComponent } from './components/admin/common/admin-nav-bar/admin-nav-bar.component';
import { AdminLoginComponent } from './components/admin/pages/admin-login/admin-login.component';
import { AdminPanelComponent } from './components/admin/pages/admin-panel/admin-panel.component';
import { AddDocComponent } from './components/admin/pages/add-doc/add-doc.component';
import { AddLabComponent } from './components/admin/pages/add-lab/add-lab.component';
import { AddPatientComponent } from './components/admin/pages/add-patient/add-patient.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { DoctorNavComponent } from './components/user/pages/doctor/common/doctor-nav/doctor-nav.component';
import { DoctorPanelComponent } from './components/user/pages/doctor/pages/doctor-panel/doctor-panel.component';
import { MyPatientsComponent } from './components/user/pages/doctor/pages/my-patients/my-patients.component';
import { AppointmentsComponent } from './components/user/pages/doctor/pages/appointments/appointments.component';
import { MyreportsComponent } from './components/user/pages/doctor/pages/myreports/myreports.component';
import { PatientPanelComponent } from './components/user/pages/patient/pages/patient-panel/patient-panel.component';
import { MedicalReportComponent } from './components/user/pages/patient/pages/medical-report/medical-report.component';
import { NewAppointmentComponent } from './components/user/pages/patient/pages/new-appointment/new-appointment.component';
import { ScanReportComponent } from './components/user/pages/patient/pages/scan-report/scan-report.component';
import { LabPanelComponent } from './components/user/pages/lab/pages/lab-panel/lab-panel.component';
import { NewReportComponent } from './components/user/pages/lab/pages/new-report/new-report.component';
import { PatientNavComponent } from './components/user/pages/patient/common/patient-nav/patient-nav.component';
import { LabNavComponent } from './components/user/pages/lab/common/lab-nav/lab-nav.component';



const routes: Routes = [
  { path: '', component: UserLoginComponent},
  { path: 'admin-navbar', component: AdminNavBarComponent},

  { path: 'admin', component: AdminLoginComponent},
  { path: 'admin/admin-panel', component: AdminPanelComponent},
  { path: 'admin/add-doctor', component: AddDocComponent},
  { path: 'admin/add-lab-assistant', component: AddLabComponent},
  { path: 'admin/add-patient', component: AddPatientComponent},

  { path: 'user-login', component: UserLoginComponent},

  { path: 'doctor-nav', component: DoctorNavComponent},
  { path: 'user/doctor-panel', component: DoctorPanelComponent},
  { path: 'user/doctor/my-patients', component: MyPatientsComponent},
  { path: 'user/doctor/reports', component: MyreportsComponent},
  { path: 'user/doctor/appointments', component: AppointmentsComponent},

  { path: 'patient-nav', component: PatientNavComponent},
  { path: 'user/patient-panel', component: PatientPanelComponent},
  { path: 'user/patient/medical-report', component: MedicalReportComponent},
  { path: 'user/patient/new-appointment', component: NewAppointmentComponent},
  { path: 'user/patient/scan-report', component: ScanReportComponent},

  { path: 'lab-nav', component: LabNavComponent},
  { path: 'user/lab/lab-panel', component: LabPanelComponent},
  { path: 'user/lab/new-report', component: NewReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }