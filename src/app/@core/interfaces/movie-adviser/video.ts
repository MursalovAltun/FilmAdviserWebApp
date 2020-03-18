export class Video {
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;

  constructor(init?: Partial<Video>) {
    Object.assign(this, init);
  }
}
