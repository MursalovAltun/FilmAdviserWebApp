import { RequestTableColumn } from './request-table-column';

export class Group {
  constructor(init: Partial<Group>) {
    Object.assign(this, init);
  }

  name: string;
  columns: RequestTableColumn[];
  isContainer: boolean;
}
