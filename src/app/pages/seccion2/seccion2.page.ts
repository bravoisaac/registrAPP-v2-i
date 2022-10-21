import { Component, OnInit } from '@angular/core';

interface seccion {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-seccion2',
  templateUrl: './seccion2.page.html',
  styleUrls: ['./seccion2.page.scss'],
})
export class Seccion2Page implements OnInit {

  componentes: seccion[] = [
    {
    icon: 'assets/icon/cursos/oja.svg',
    name: 'ARQ-D1',
    redirectTo: '/generar-qr'
    },
    {
    icon: 'assets/icon/cursos/oja.svg',
    name: 'ARQ-D2',
    redirectTo: '/generar-qr'
    },
    {
    icon: 'assets/icon/cursos/oja.svg',
    name: 'ARQ-D3',
    redirectTo: '/generar-qr'
    },
    {
    icon: 'assets/icon/cursos/oja.svg',
    name: 'ARQ-D4',
    redirectTo: '/generar-qr'
    },

  ]

  constructor() { }

  ngOnInit() {
    

    
  }

}
