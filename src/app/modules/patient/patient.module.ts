import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientRoutingModule } from './patient-routing.module';

@NgModule({
  declarations: [
    PatientRegistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
