/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, OnInit } from '@angular/core';
import { PageSpinnerService } from '../../../shared/services/page-spinner.service';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout withScroll>
      <nb-layout-header>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive start>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>
      <nb-layout-column
        class="content-body"
        style="padding: 0; position:relative;"
      >
        <div id="page-spinner" *ngIf="spinnerState">
          <div class="page-spinner-loading"></div>
        </div>
        <div style="padding: 2.25rem 2.25rem 0.75rem;">
          <ng-content select="router-outlet"></ng-content>
        </div>
      </nb-layout-column>
      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `
})
export class OneColumnLayoutComponent implements OnInit {
  public spinnerState;

  constructor(private spinner: PageSpinnerService) {
    this.spinner.spinnerVisibilityChange.subscribe(value => {
      this.spinnerState = value;
    });
  }

  ngOnInit() {}
}
