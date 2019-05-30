import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'arq1';

  rutaApp1 = '';
  rutaApp2 = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.rutaApp1 = this.retailRoute(this.router.url) + '/app1';
    this.rutaApp2 = this.retailRoute(this.router.url) + '/app2';
    console.log(this.router.url);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  /** Rebem la url actual (Router.url) i tornem només la part de la subaplicació */
  retailRoute(route: string): string {
    const posicio = route.slice(1).indexOf('/');
    const rutaInicial = route.substring(0, posicio + 1);
    return rutaInicial;
  }
}
