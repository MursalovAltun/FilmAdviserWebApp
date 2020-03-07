export class ToolValidator {
  type: string;
  name: string;
  options: any;

  constructor(init?: Partial<ToolValidator>) {
    Object.assign(this, init);
  }
}
