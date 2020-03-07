import { ToolValidator } from './tool-validator';

export class BaseColumn {
  id: number;
  creationDate: string;
  name: string;
  type: string;
  userFriendlyType: string;
  options: string;
  validators: string;
  helpMessage: string;
  forForwarder: boolean;
  defaultValue: string;
  group: string;
  isRequired: boolean;
  forContainer: boolean;
  isCannotDelete: boolean;
  isSpecial: boolean;
  order: number;
  hideForForwarder: boolean;
  formula: string;
  address: string;

  parsedFormula: string;

  get fieldName(): string {
    if (this.id) {
      return `colid_${this.id}`;
    } else {
      return null;
    }
  }

  get optionsList(): string[] {
    return JSON.parse(this.options);
  }

  set optionsList(value: string[]) {
    this.options = JSON.stringify(value);
  }

  optionsStr() {
    if (!this.options) {
      return null;
    }
    return this.optionsList.join(', ');
  }

  get validatorsList(): ToolValidator[] {
    return JSON.parse(this.validators);
  }

  set validatorsList(value: ToolValidator[]) {
    this.validators = JSON.stringify(value);
  }

  get validatorsNames() {
    if (!this.validators) {
      return null;
    }
    const names = [];
    this.validatorsList.forEach(element => {
      names.push(element.name);
    });

    return names.join(', ');
  }

  public constructor(init?: Partial<BaseColumn>) {
    Object.assign(this, init);
  }
}
