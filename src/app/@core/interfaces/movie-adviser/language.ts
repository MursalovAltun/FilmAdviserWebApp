export class Language {
  name: string;

  constructor(init?: Partial<Language>) {
    Object.assign(this, init);
  }
}
