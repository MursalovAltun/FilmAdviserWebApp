import { BaseColumn } from './base-column';
export class OptimizationTableColumn extends BaseColumn {
  optimizationTableId: number;
  requestTableColumnId?: number;

  public constructor(init?: Partial<OptimizationTableColumn>) {
    super(init);
    Object.assign(this, init);
  }
}
