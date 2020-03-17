import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ClientForwarderService } from '../../../@core/backend/common/services/client-forwarder.service';
import { ValidationHelpers } from '../../../helpers/validation.helper';

@Component({
  selector: 'ngx-dialog-add-forwarder',
  templateUrl: './dialog-add-forwarder.component.html',
  styleUrls: ['./dialog-add-forwarder.component.scss'],
})
export class DialogAddForwarderComponent implements OnInit {
  ngOnInit(): void {
    this.form.patchValue({
      clientId: this.clientId,
      name: null,
      email: null,
    });
  }
  @Input() title: string;
  @Input() clientId: number;

  header = 'Add Forwarder';
  form: FormGroup;

  constructor(
    protected ref: NbDialogRef<DialogAddForwarderComponent>,
    private clientForwarderService: ClientForwarderService,
  ) {
    this.form = new FormGroup({
      clientId: new FormControl(this.clientId, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  dismiss() {
    this.ref.close(false);
  }

  onSubmit() {
    if (!this.form.valid) {
      ValidationHelpers.validateAllFormFields(this.form);
      return;
    }
    this.clientForwarderService.create(this.form.value).subscribe(x => {
      this.ref.close(true);
    });
  }
}
