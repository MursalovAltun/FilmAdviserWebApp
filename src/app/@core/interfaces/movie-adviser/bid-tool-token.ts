export class BidToolToken {
  id: number;
  creationDate: string;
  token: string;
  type: BidToolTokenType;
  aspToken: string;
  status: BidToolTokenStatus;
  email: string;

  public constructor(init?: Partial<BidToolToken>) {
    Object.assign(this, init);
  }
}

export enum BidToolTokenType {
  ConfirmEmail = 'ConfirmEmail',
  AcceptInviteEmployee = 'AcceptInviteEmployee',
  ResetPassword = 'ResetPassword'
}

export enum BidToolTokenStatus {
  Used = 'Used',
  Active = 'Active'
}
