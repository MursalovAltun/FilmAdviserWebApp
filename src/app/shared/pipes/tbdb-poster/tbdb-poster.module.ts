import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbPosterPipe } from './tmdb-poster.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TmdbPosterPipe],
  exports: [TmdbPosterPipe],
})
export class TmdbPosterPipeModule {}
