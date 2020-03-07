import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';

export class ValidationHelpers {
  public static validateAllFormFields(control: AbstractControl) {
    if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach(field => {
        const controlChild = control.get(field);
        this.validateAllFormFields(controlChild);
      });
    } else if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormArray) {
      for (let index = 0; index < control.length; index++) {
        const element = control.at(index);
        this.validateAllFormFields(element);
      }
    }
  }

  public static markAsUntouchedAllForm(control: AbstractControl) {
    if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach(field => {
        const controlChild = control.get(field);
        this.markAsUntouchedAllForm(controlChild);
      });
    } else if (control instanceof FormControl) {
      control.markAsUntouched({ onlySelf: true });
    } else if (control instanceof FormArray) {
      for (let index = 0; index < control.length; index++) {
        const element = control.at(index);
        this.markAsUntouchedAllForm(element);
      }
    }
  }
}
