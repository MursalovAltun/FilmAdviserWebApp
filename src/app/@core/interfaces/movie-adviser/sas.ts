export class Sas {
  storageAccountName: string;
  sasContainerToken: string;
  containerName: string;
  sharedAccessExpiryTime: string;

  public constructor(init?: Partial<Sas>) {
    Object.assign(this, init);
  }
}
