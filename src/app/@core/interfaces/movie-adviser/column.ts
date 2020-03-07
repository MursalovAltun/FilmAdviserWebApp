import { BaseColumn } from './base-column';
import { ToolValidator } from './tool-validator';

export class Column extends BaseColumn {
  companyId?: number;
  isDefault: boolean;

  public constructor(init?: Partial<Column>) {
    super(init);
    Object.assign(this, init);
  }
}
