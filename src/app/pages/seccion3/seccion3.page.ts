import { Component, OnInit } from '@angular/core';

interface seccion {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-seccion3',
  templateUrl: './seccion3.page.html',
  styleUrls: ['./seccion3.page.scss'],
})
export class Seccion3Page implements OnInit {

  componentes: seccion[] = [
    {
    icon: 'assets/icon/cursos/oja.svg',
    name: 'APM-D1',
    redirectTo: '/generar-qr'
    },
    {
    icon: 'assets/icon/cursos/oja.svg',
    name: 'APM-D2',
    redirectTo: '/generar-qr'
    },
    {
    icon: 'assets/icon/cursos/oja.svg',
    name: 'APM-D3',
    redirectTo: '/generar-qr'
    },
    {
    icon: 'assets/icon/cursos/oja.svg',
    name: 'APM-D4',
    redirectTo: '/generar-qr'
    },

  ]

  constructor() { }

  ngOnInit() {
    

    
  }

}
