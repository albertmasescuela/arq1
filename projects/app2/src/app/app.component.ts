import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app2';
  rutaLlista = '';
  rutaDetall = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.rutaLlista = this.retailRoute(this.router.url) + '/llista';
    this.rutaDetall = this.retailRoute(this.router.url) + '/detall';
    console.log(this.router.url);
  }

  /** Rebem la url actual (Router.url) i tornem només la part de la subaplicació */
  retailRoute(route: string): string {
    const posicio = route.slice(1).indexOf('/');
    const rutaInicial = route.substring(0, posicio + 1);
    return rutaInicial;
  }
}
