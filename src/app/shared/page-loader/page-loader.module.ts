import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './page-loader.component';
import { NbSpinnerModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, NbSpinnerModule],
  declarations: [PageLoaderComponent],
  exports: [PageLoaderComponent]
})
export class PageLoaderModule {}
