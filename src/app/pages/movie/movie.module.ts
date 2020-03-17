import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbSpinnerModule, NbButtonModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { MovieComponent } from './movie.component';
import { ListComponent } from './list/list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { FormsModule } from '@angular/forms';
import { TmdbPosterPipeModule } from '../../shared/pipes/tbdb-poster/tbdb-poster.module';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { SeparatePipeModule } from '../../shared/pipes/separate/separate.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ComponentsModule } from '../../@components/components.module';

const NEBULAR_MODULES = [
  NbSpinnerModule,
  NbButtonModule,
  NbCardModule,
  NbSelectModule,
  NbIconModule,
];

const COMPONENTS = [
  MovieComponent,
  ListComponent,
  ItemComponent,
];

const PIPES = [
  TmdbPosterPipeModule,
  SeparatePipeModule,
];

@NgModule({
  declarations: [...COMPONENTS, DetailsComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    ...NEBULAR_MODULES,
    ...PIPES,
    NgCircleProgressModule.forRoot(),
    ComponentsModule,
  ],
})
export class MovieModule { }
