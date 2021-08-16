import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/core/models/patient';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
})
export class PatientRegistrationComponent implements OnInit {
  public patientForm: FormGroup;
  private returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) {}

  public ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/patient';

    this.patientForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      isAdmin: new FormControl(false),
    });
  }

  public login(): void {
    if (this.patientForm.valid) {
      const email = this.patientForm.controls.email.value;
      const password = this.patientForm.controls.password.value;
      const patient: Patient = {
        id: 1,
        name: 'XYZ',
        gender: 'Male',
        age: 18,
        address: 'Janak puri',
        city: 'Delhi',
        mobile: 123456789,
        symptoms: 'XYZ'
      };
      this.patientService.addNew(patient);
      this.router.navigate([this.returnUrl]);
    } else {
      this.patientForm.markAllAsTouched();
    }
  }
}
