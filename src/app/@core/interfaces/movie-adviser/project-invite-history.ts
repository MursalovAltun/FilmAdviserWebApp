export class ProjectInviteHistory {
  id: number;
  projectInviteId: number;
  message: string;
  version: string;
  creationDate: string;

  public constructor(init?: Partial<ProjectInviteHistory>) {
    Object.assign(this, init);
  }
}
