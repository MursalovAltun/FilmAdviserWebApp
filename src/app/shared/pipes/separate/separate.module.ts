import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparatePipe } from './separate.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [SeparatePipe],
  declarations: [SeparatePipe],
})
export class SeparatePipeModule { }
