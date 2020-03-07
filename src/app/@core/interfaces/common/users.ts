import { Company } from '../movie-adviser/company';
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Observable } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';
import { Settings } from './settings';
import { Timezone } from './timezone';

export interface User {
  id: number;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  login: string;
  picture: string;
  address: Address;
  settings: Settings;
  currentCompany: Company;
  currentCompanyId: number;
  timeZone: Timezone;
}

export interface Address {
  street: string;
  city: string;
  zipCode: string;
}

export abstract class UserData {
  abstract get gridDataSource(): DataSource;
  abstract getCurrentUser(): Observable<User>;
  abstract list(pageNumber: number, pageSize: number): Observable<User[]>;
  abstract get(id: number): Observable<User>;
  abstract update(user: User): Observable<User>;
  abstract updateCurrent(user: User): Observable<User>;
  abstract create(user: User): Observable<User>;
  abstract delete(id: number): Observable<boolean>;
}
