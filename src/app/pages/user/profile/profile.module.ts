import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NbCardModule, NbSpinnerModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { PageLoaderModule } from '../../../shared/page-loader/page-loader.module';

const NEBULAR_MODULES = [
  NbSpinnerModule,
  NbButtonModule,
  NbCardModule,
  NbSelectModule,
];

const COMPONENTS = [
  ProfileComponent,
  DetailsComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    PageLoaderModule,
    ...NEBULAR_MODULES],
})
export class ProfileModule { }
