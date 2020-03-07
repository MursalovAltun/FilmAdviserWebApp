import { ClientForwarder } from './client-forwarder';
import { Project } from './project';
import { ResponseTable } from './response-table';
import { AzureStorageFile } from './azure-storage-file';
import { ProjectInviteHistory } from './project-invite-history';
export class ProjectInvite {
  id: number;
  projectId: number;
  clientForwarderId?: number;
  emails: string;
  responseStatus: any;
  version: number;

  project?: Project;
  responseTables?: ResponseTable[];
  clientForwarder: ClientForwarder;
  azureStorageFiles: AzureStorageFile[];
  projectInviteHistories: ProjectInviteHistory[];


  public constructor(init?: Partial<ProjectInvite>) {
    Object.assign(this, init);

    if (init.project) {
      this.project = new Project(init.project);
    }

    if (init.clientForwarder) {
      this.clientForwarder = new ClientForwarder(init.clientForwarder);
    }

    if (init.responseTables) {
      this.responseTables = [];
      init.responseTables.forEach(element => {
        const newElem = new ResponseTable(element);
        if (this.project && this.project.requestTables) {
          const tmp = this.project.requestTables.find(
            x => x.id === newElem.requestTableId
          );
          if (tmp) {
            newElem.requestTable = tmp;
          }
        }

        this.responseTables.push(newElem);
      });
    }

    if (init.projectInviteHistories) {
      this.projectInviteHistories = [];
      init.projectInviteHistories.forEach(element => {
        this.projectInviteHistories.push(new ProjectInviteHistory(element));
      });
    }

    if (init.azureStorageFiles) {
      this.azureStorageFiles = [];
      init.azureStorageFiles.forEach(element => {
        this.azureStorageFiles.push(new AzureStorageFile(element));
      });
    }
  }

  public get projectName(): string {
    return this.project ? this.project.name : 'Not provided';
  }

  public get projectDescription(): string {
    return this.project ? this.project.description : 'Not provided';
  }

  public get companyName(): string {
    if (this.project && this.project.company) {
      return this.project.company.name;
    } else {
      return 'Not provided';
    }
  }
}
