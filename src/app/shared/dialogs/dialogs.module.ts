import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAddForwarderComponent } from './dialog-add-forwarder/dialog-add-forwarder.component';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [DialogAddForwarderComponent, DialogConfirmComponent],
  imports: [CommonModule, NbCardModule, NbInputModule, ReactiveFormsModule, FormsModule, NbButtonModule],
  exports: [DialogAddForwarderComponent, DialogConfirmComponent],
  entryComponents: [DialogAddForwarderComponent, DialogConfirmComponent]
})
export class DialogsModule {}
