import { User } from '../common/users';
import { AzureStorageFile } from './azure-storage-file';
import { RequestTable } from './request-table';
import { Company } from './company';

export class Project {
  id: number;
  name: string;
  companyId: number;
  description: string;
  status: string;
  creationDate: string;

  company?: Company;
  requestTables?: RequestTable[];
  azureStorageFiles: AzureStorageFile[];

  createById: number;
  createBy: User;

  public constructor(init?: Partial<Project>) {
    Object.assign(this, init);
    if (init.company) {
      this.company = new Company(init.company);
    }

    if (init.requestTables) {
      this.requestTables = [];
      init.requestTables.forEach(element => {
        this.requestTables.push(new RequestTable(element));
      });
    }

    if (init.azureStorageFiles) {
      this.azureStorageFiles = [];
      init.azureStorageFiles.forEach(element => {
        this.azureStorageFiles.push(new AzureStorageFile(element));
      });
    }

    if (init.createBy) {
      this.createBy = init.createBy;
    }
  }
}
