import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacePipe } from './remove-space.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [RemoveSpacePipe],
  exports: [RemoveSpacePipe]
})
export class RemoveSpace {}
