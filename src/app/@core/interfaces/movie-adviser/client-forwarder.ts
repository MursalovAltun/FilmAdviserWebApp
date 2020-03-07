import { Company } from './company';

export class ClientForwarder {
  id: number;
  clientId: number;
  client: Company;
  forwarderId?: number;
  forwarder: Company;
  name: string;
  email: string;
  isApproved: boolean;

  public constructor(init?: Partial<ClientForwarder>) {
    Object.assign(this, init);
  }

  public get clientName(): string {
    return this.client ? this.client.name : '';
  }

  public get clientEmail(): string {
    return this.client ? this.client.email : '';
  }
}
