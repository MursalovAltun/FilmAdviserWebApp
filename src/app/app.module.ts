/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
// tslint:disable-next-line: trailing-comma

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { AuthModule } from './@auth/auth.module';
import { InitUserService } from './@theme/services/init-user.service';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbCardModule
} from '@nebular/theme';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { EmptyModule } from './shared/empty/empty.module';
import { PageLoaderModule } from './shared/page-loader/page-loader.module';

export function init_app(injector: Injector) {
  return () =>
    new Promise<any>((resolve: Function) => {
      const initUserService = injector.get(InitUserService);
      initUserService.initCurrentUser().subscribe(
        () => {},
        () => resolve(),
        () => resolve()
      ); // a place for logging error
    });
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ThemeModule.forRoot(),
    AuthModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY'
    }),
    CoreModule.forRoot(),
    EmptyModule,
    PageLoaderModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [Injector],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
