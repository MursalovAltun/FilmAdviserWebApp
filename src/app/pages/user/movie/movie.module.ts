import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbSpinnerModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
import { PageLoaderModule } from '../../../shared/page-loader/page-loader.module';
import { MovieComponent } from './movie.component';
import { ListComponent } from './list/list.component';
import { MovieRoutingModule } from './movie-routing.module';

const NEBULAR_MODULES = [
  NbSpinnerModule,
  NbButtonModule,
  NbCardModule,
  NbSelectModule,
];

const COMPONENTS = [
  MovieComponent,
  ListComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MovieRoutingModule,
  ],
})
export class MovieModule { }
