export class ProductionCompany {
  name: string;
  logoPath: string;
  originCountry: string;

  constructor(init?: Partial<ProductionCompany>) {
    Object.assign(this, init);
  }
}
