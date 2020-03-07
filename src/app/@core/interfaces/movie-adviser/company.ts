export class Company {
  id: number;
  name: string;
  email: string;
  type: string;

  public constructor(init?: Partial<Company>) {
    Object.assign(this, init);
  }
}
