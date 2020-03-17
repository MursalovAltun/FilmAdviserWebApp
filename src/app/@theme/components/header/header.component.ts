/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
} from '@nebular/theme';

import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserStore } from '../../../@core/stores/user.store';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  currentTheme = 'cosmic';

  userMenu = this.getMenuItems();

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userStore: UserStore,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private router: Router,
  ) {}

  getMenuItems() {
    const userLink = this.user ? '/pages/user/profile/details' : '';
    return [
      { title: 'Profile', link: userLink },
      { title: 'Change password', link: '/pages/profile/change-password'},
      { title: 'Log out', link: '/auth/logout' },
    ];
  }

  ngOnInit() {
    this.user = this.userStore.getUser();
    console.log('User - ', this.user);
    this.userMenu = this.getMenuItems();

    const { xl } = this.breakpointService.getBreakpointsMap();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.router.navigate(['/']);
    return false;
  }
}
