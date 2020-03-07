import { Company } from './company';
import { BidToolToken } from './bid-tool-token';
import { User } from '../common/users';

export class CompanyUser {
  id: number;
  creationDate: string;
  companyId: number;
  userId: number;
  user: User;
  companyRole: CompanyRole;
  confirmInvite: boolean;
  confirmInviteDate: string;
  bidToolTokenId: number;
  bidToolToken: BidToolToken;
  company: Company;

  public constructor(init?: Partial<CompanyUser>) {
    Object.assign(this, init);
    if (init.bidToolToken) {
      this.bidToolToken = new BidToolToken(init.bidToolToken);
    }
    if (init.company) {
      this.company = new Company(init.company);
    }
  }
}

export enum CompanyRole {
  Creator = 'Creator',
  Employee = 'Employee',
  Consultant = 'Consultant',
  Admin = 'Admin'
}
