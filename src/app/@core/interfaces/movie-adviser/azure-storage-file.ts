export class AzureStorageFile {
  id?: number;
  creationDate?: number;
  name: string;
  url?: string;
  urlSas?: string;
  projectId?: number;
  projectInviteId?: number;
  size: number;

  isLoading?: boolean;
  percentLoading: number;

  get sizeStr() {
    if (this.size) {
      let bytes = this.size;
      const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
      if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) return '?';

      let unit = 0;

      while (bytes >= 1024) {
        bytes /= 1024;
        unit++;
      }

      return bytes.toFixed(+2) + ' ' + units[unit];
    }
    return null;
  }

  public constructor(init?: Partial<AzureStorageFile>) {
    Object.assign(this, init);
  }
}
