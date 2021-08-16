import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  templateUrl: './user-login.component.html',
})
export class UserLoginComponent implements OnInit {
  public userLoginForm: FormGroup;
  private returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  public ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/patient';

    this.userLoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      isAdmin: new FormControl(false, [Validators.required]),
    });
  }

  public login(): void {
    if (this.userLoginForm.valid) {
      const email = this.userLoginForm.controls.email.value;
      const password = this.userLoginForm.controls.password.value;
      const isAdmin = this.userLoginForm.controls.isAdmin.value;
      if (this.userService.login(email, password, isAdmin)) {
        this.router.navigate([this.returnUrl]);
      } else {
        alert('Invalid user');
      }
    } else {
      this.userLoginForm.markAllAsTouched();
    }
  }
}
