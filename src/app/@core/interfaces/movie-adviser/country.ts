export class Country {
  name: string;

  constructor(init?: Partial<Country>) {
    Object.assign(this, init);
  }
}
