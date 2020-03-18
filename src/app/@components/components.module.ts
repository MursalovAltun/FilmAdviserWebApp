/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxValidationMessageComponent } from './validation-message/validation-message.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NbIconModule } from '@nebular/theme';
import { YoutubeEmbedComponent } from './youtube-embed/youtube-embed.component';

const COMPONENTS = [
  NgxValidationMessageComponent,
  StarRatingComponent,
  YoutubeEmbedComponent,
];

const NEBULAR_MODULES = [
  NbIconModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...NEBULAR_MODULES,
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ComponentsModule {}
