import { Component, OnInit } from '@angular/core';

interface Cursos {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  componentes: Cursos[] = [
    {
    icon: 'assets/icon/cursos/portafolio.png',
    name: 'PROCESO DE PORTAFOLIO 4_019D',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/etica.png',
    name: 'ETICA PARA EL TRABAJO_005D',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/analitica.png',
    name: 'ESTADISTICA DESCRIPTIVA_010D',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/arquitectura.png',
    name: 'ARQUITECTURA_008D',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/eng.png',
    name: 'INGLES ELEMENTAL_002D',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/calidad.png',
    name: 'CALIDAD DE SOFTWARE_005D',
    redirectTo: '/asistencia'
    },
    {
    icon: 'assets/icon/cursos/computadora.png',
    name: 'PROGRAMACION DE MOVILES_005D',
    redirectTo: '/asistencia'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
