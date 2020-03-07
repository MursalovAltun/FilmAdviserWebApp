import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageSpinnerService {
  isSpinnerVisible: boolean;
  spinnerVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.spinnerVisibilityChange.subscribe(value => {
      this.isSpinnerVisible = value;
    });
  }

  toggleSpinnerVisibility() {
    this.spinnerVisibilityChange.next(!this.isSpinnerVisible);
  }
}
