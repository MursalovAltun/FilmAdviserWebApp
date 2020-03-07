import { InitUserService } from './../../../@theme/services/init-user.service';
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NB_AUTH_OPTIONS,
  NbAuthSocialLink,
  NbAuthService,
  NbAuthResult,
} from '@nebular/auth';
import { getDeepFromObject } from '../../helpers';
import { Timezone } from '../../../@core/interfaces/common/timezone';
import { TimeZoneService } from '../../../@core/backend/common/services/timezone.service';

@Component({
  selector: 'ngx-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxRegisterComponent implements OnInit {
  minLength: number = this.getConfigValue(
    'forms.validation.password.minLength',
  );
  maxLength: number = this.getConfigValue(
    'forms.validation.password.maxLength',
  );
  isFullNameRequired: boolean = this.getConfigValue(
    'forms.validation.fullName.required',
  );
  isEmailRequired: boolean = this.getConfigValue(
    'forms.validation.email.required',
  );
  isPasswordRequired: boolean = this.getConfigValue(
    'forms.validation.password.required',
  );
  redirectDelay: number = this.getConfigValue('forms.register.redirectDelay');
  showMessages: any = this.getConfigValue('forms.register.showMessages');
  strategy: string = this.getConfigValue('forms.register.strategy');
  socialLinks: NbAuthSocialLink[] = this.getConfigValue(
    'forms.login.socialLinks',
  );

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  loading: boolean = false;

  public timezones: Array<Timezone>;

  registerForm: FormGroup;
  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    private fb: FormBuilder,
    protected router: Router,
    protected initUserService: InitUserService,
    private timeZoneService: TimeZoneService,
  ) {}

  get fullName() {
    return this.registerForm.get('fullName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get terms() {
    return this.registerForm.get('terms');
  }
  get timeZoneId() {
    return this.registerForm.get('timeZoneId');
  }

  ngOnInit(): void {
    const fullNameValidators = [];
    this.isFullNameRequired && fullNameValidators.push(Validators.required);

    const emailValidators = [
      // Validators.pattern(EMAIL_PATTERN),
      Validators.email,
    ];
    this.isEmailRequired && emailValidators.push(Validators.required);

    const passwordValidators = [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ];
    this.isPasswordRequired && passwordValidators.push(Validators.required);

    this.registerForm = this.fb.group({
      fullName: this.fb.control('', [...fullNameValidators]),
      email: this.fb.control('', [...emailValidators]),
      password: this.fb.control('', [...passwordValidators]),
      confirmPassword: this.fb.control('', [...passwordValidators]),
      terms: this.fb.control(''),
      companyName: this.fb.control(null),
      companyType: this.fb.control('client'),
      timeZoneId: this.fb.control('Eastern Standard Time'),
    });

    this.timeZoneService.getAllTimezones().subscribe(timezones => {
      this.timezones = timezones;
    });
  }

  register(): void {
    this.loading = true;
    this.user = this.registerForm.value;
    this.errors = this.messages = [];
    this.submitted = true;

    this.service
      .register(this.strategy, this.user)
      .subscribe((result: NbAuthResult) => {
        this.submitted = false;
        if (result.isSuccess()) {
          this.messages = result.getMessages();
          this.initUserService.initCurrentUser().subscribe(x => {
            return this.router.navigate(['/pages/dashboard']);
          });
        } else {
          console.log(result);
          this.errors[0] = result.getResponse().Message;
        }

        // const redirect = result.getRedirect();
        // if (redirect) {
        //   setTimeout(() => {
        //     return this.router.navigateByUrl(redirect);
        //   }, this.redirectDelay);
        // }
        this.loading = false;
        this.cd.detectChanges();
      });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
