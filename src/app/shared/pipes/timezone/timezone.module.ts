import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezonePipe } from './timezone.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TimezonePipe],
  exports: [TimezonePipe],
})
export class TimeZonePipeModule {}
