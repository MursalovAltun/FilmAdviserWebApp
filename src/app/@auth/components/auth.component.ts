/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { NbAuthService } from '@nebular/auth';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-auth',
  styleUrls: ['./auth.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-column>
        <div class="logo" style="margin: 0 auto 3rem;max-width: 15.5rem;">
          <!-- <svg
            width="100%"
            height="100%"
            viewBox="0 0 146 146"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve"
            xmlns:serif="http://www.serif.com/"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
          >
            <rect
              id="editable"
              x="0"
              y="0"
              width="145.833"
              height="145.833"
              style="fill:none;"
            />
            <path
              d="M53.995,16.959l0,111.916l60.621,-37.306l-60.621,-74.61Zm61.528,71.502l-36.528,-44.301l36.528,0l0,44.301Zm-63.568,-20.208l-0.023,0l-5.418,-5.417l0,-40.437l-40.437,0l-5.417,-5.418l0,-0.022l51.295,0l0,51.294Zm93.878,-12.629l-27.979,11.464l0,-22.928l27.979,11.464Zm-103.205,3.303l-5.44,-5.44l0,-22.539l-22.539,0l-4.663,-4.663l32.642,0l0,32.642Zm-9.326,-9.303l-14.013,-14.013l14.013,0l0,14.013Z"
              style="fill:#607d8b;"
            />
          </svg> -->
          <span class="main" style="font-size: 1.4rem;">
            Movie Adviser
          </span>
        </div>
        <div class="login-card">
          <router-outlet></router-outlet>
        </div>
      </nb-layout-column>
    </nb-layout>
  `
})
export class NgxAuthComponent implements OnDestroy {
  private alive = true;

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  // showcase of how to use the onAuthenticationChange method
  constructor(protected auth: NbAuthService, protected location: Location) {
    this.subscription = auth
      .onAuthenticationChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe((authenticated: boolean) => {
        this.authenticated = authenticated;
      });
  }

  back() {
    this.location.back();
    return false;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
