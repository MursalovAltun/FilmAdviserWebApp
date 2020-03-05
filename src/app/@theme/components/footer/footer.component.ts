import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://t.me/altun_mursalov" target="_blank">Altun Mursalov</a></b> {{currentYear}}
    </span>
    <div class="socials">
      <a href="https://github.com/MursalovAltun" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/altun-mursalov-7b04ab181/"
         target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
  public get currentYear(): number {
    return new Date().getFullYear();
  }
}
