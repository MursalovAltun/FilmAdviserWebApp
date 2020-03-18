import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ngx-youtube-embed',
  templateUrl: './youtube-embed.component.html',
  styleUrls: ['./youtube-embed.component.scss']
})
export class YoutubeEmbedComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  width: number;

  @Input()
  height: number;

  @Input()
  key: string;

  @Input()
  allow: string = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';

  @Input()
  allowFullScreen: boolean;

  @Input()
  responsive: boolean;

  public embedUrl: SafeResourceUrl;

  constructor(private _sanitization: DomSanitizer) { }

  ngOnInit() {
    if (!this.key) {
      throw new Error('Key cannot be empty!');
    }

    this.embedUrl = this._sanitization.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}`);
  }
}
