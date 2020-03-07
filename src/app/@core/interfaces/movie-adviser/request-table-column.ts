import { BaseColumn } from './base-column';
import { ToolValidator } from './tool-validator';

export class RequestTableColumn extends BaseColumn {
  requestTableId: number;
  indexColumn: number;

  public constructor(init?: Partial<RequestTableColumn>) {
    super(init);
    Object.assign(this, init);
  }
}
