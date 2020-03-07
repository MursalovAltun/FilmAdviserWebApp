import { RequestTableColumn } from './request-table-column';
export class RequestTable {
  id: number;
  projectId: number;
  name: string;
  columns: RequestTableColumn[];
  creationDate: string;
  rows: number;
  lastEdit: string;
  isValid: boolean;
  isTemplate: boolean;
  companyId?: number;

  get countColumns() {
    if (this.columns) {
      return this.columns.length;
    }
    return null;
  }

  get lastEditDateObj() {
    if (this.lastEdit) {
      return new Date(this.lastEdit);
    } else {
      return null;
    }
  }

  public constructor(init?: Partial<RequestTable>) {
    Object.assign(this, init);

    if (init.columns) {
      this.columns = init.columns
        .map((x: RequestTableColumn) => {
          return new RequestTableColumn(x);
        })
        .sort((x, y) => x.order - y.order);
    }
  }
}
