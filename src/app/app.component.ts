import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { MockValues } from './entities/mock.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'AzChallengeCalicotWeb';
  @ViewChild('snav', { static: true }) sidenav: MatSidenav;

  mobileQuery: MediaQueryList;
  estLogin: boolean = false;

  private _mobileQueryListener: () => void;

  constructor(private router: Router,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    this._mobileQueryListener = () => changeDetectorRef.detectChanges();

    this.mobileQuery.addListener(this._mobileQueryListener);

    MockValues.init();
  }

  ngOnDestroy(): void {

    this.mobileQuery.removeListener(this._mobileQueryListener);

  }

  obtenirClasseBackground() {
    if (this.estLogin)
      return 'image-background';
    else
      return '';
  }

  onActivate(event) {
    document.querySelector('mat-sidenav-content').scrollTop = 0;
    this.estLogin = this.router.url.includes('login');
  }

}
