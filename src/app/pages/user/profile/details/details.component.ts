import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../@core/backend/common/services/users.service';
import { User } from '../../../../@core/interfaces/common/users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Timezone } from '../../../../@core/interfaces/common/timezone';
import { NbToastrService } from '@nebular/theme';
import { TimeZoneService } from '../../../../@core/backend/common/services/timezone.service';
import { ValidationHelpers } from '../../../../helpers/validation.helper';
import { PageSpinnerService } from '../../../../shared/services/page-spinner.service';

@Component({
  selector: 'ngx-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public user: User;
  public loading = false;
  public userDetailsForm: FormGroup;
  public processUpdate: false;
  public timezones: Array<Timezone>;

  constructor(private _userService: UsersService,
              private fb: FormBuilder,
              private ts: NbToastrService,
              private timeZoneService: TimeZoneService,
              private spinner: PageSpinnerService) { }

  ngOnInit() {
    this.loading = true;
    this.spinner.toggleSpinnerVisibility();
    this.timeZoneService.getAllTimezones().subscribe(timezones => {
      this.timezones = timezones;
      this._userService.getCurrentUser().subscribe(user => {
        this.userDetailsForm = this.fb.group({
          id: this.fb.control(user.id, [Validators.required]),
          firstName: this.fb.control(user.firstName, [Validators.required]),
          lastName: this.fb.control(user.lastName, [Validators.required]),
          timeZoneId: this.fb.control(user.timeZone.id, [Validators.required]),
          email: this.fb.control({value: user.email, disabled: true}, [Validators.required]),
        });
        this.spinner.toggleSpinnerVisibility();
        this.loading = false;
      });
    });
  }

  public get firstName() {
    return this.userDetailsForm.get('firstName');
  }

  public get lastName() {
    return this.userDetailsForm.get('lastName');
  }

  update() {
    if (!this.userDetailsForm.valid) {
      ValidationHelpers.validateAllFormFields(this.userDetailsForm);
      return;
    }

    this._userService.updateCurrent(this.userDetailsForm.value).subscribe(user => {
      // this.router.navigate(['/']);
      this.ts.success('Profile details are successfully updated', 'Profile details update');
    }, err => {
      this.ts.danger('Something went wrong', 'Error');
    });
  }
}
