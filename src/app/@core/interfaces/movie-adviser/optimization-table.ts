import { OptimizationTableColumn } from './optimization-table-column';
import { RequestTable } from './request-table';

export class OptimizationTable {
  id: number;
  creationDate: string;
  lastUpdateDate: string;
  name: string;
  requestTableId: number;
  requestTable: RequestTable;
  baseline?: number;
  spend?: number;
  isResultTable: boolean;

  columns: OptimizationTableColumn[];

  public constructor(init?: Partial<OptimizationTable>) {
    Object.assign(this, init);

    if (init.columns) {
      this.columns = init.columns.map(x => new OptimizationTableColumn(x));
    }
  }

  get savings() {
    if (this.baseline && this.spend) {
      return this.baseline - this.spend;
    }
    return null;
  }

  get savingsPercent() {
    const s = this.savings;
    if (s) {
      return (s * 100) / this.baseline;
    }
    return null;
  }
}
