export class Genre {
  id: number;
  name: string;

  constructor(init?: Partial<Genre>) {
    Object.assign(this, init);
  }
}
