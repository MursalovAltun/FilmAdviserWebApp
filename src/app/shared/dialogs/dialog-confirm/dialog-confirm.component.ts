import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  @Input() header: string;
  @Input() message: string;

  @Output() choise = new EventEmitter<boolean>();

  constructor(
    protected ref: NbDialogRef<DialogConfirmComponent>
  ) { }

  ngOnInit() {
  }

  choose(ok: boolean) {
    this.choise.emit(ok);
    this.ref.close();
  }

}
