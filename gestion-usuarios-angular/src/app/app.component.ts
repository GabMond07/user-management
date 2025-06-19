import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private menuCtrl: MenuController, private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuCtrl.close('main-menu');
      });
  }

  async navigate(url: string) {
    await this.router.navigateByUrl(url, { replaceUrl: true });
    this.menuCtrl.close('main-menu');
  }
}