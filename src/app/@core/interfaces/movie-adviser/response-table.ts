import { ProjectInvite } from './project-invite';
import { RequestTable } from './request-table';
export class ResponseTable {
  id: number;
  projectInviteId: number;
  requestTableId: number;
  requestTable: RequestTable;
  version: string;
  status: string;
  lastEdit: string;
  isValid: boolean;

  public constructor(init?: Partial<ResponseTable>) {
    Object.assign(this, init);

    if (init.requestTable) {
      this.requestTable = new RequestTable(init.requestTable);
    }
  }
}
