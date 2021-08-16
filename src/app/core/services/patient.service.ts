import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private patients: Patient[] = [];

  public getAll(): Patient[] {
    return this.patients;
  }

  public addNew(patient: Patient): boolean {
    this.patients.push(patient);
    return true;
  }
}
