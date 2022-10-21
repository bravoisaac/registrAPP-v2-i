import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

interface histo {
  asignatura:string ;
  seccion:string ;
  fecha:string ;
  hora:string ;

}

@Component({
  selector: 'app-generar-qr2',
  templateUrl: './generar-qr2.page.html',
  styleUrls: ['./generar-qr2.page.scss'],
})
export class GenerarQr2Page implements OnInit {

 
  historial2:histo ={
    asignatura:'',
    seccion:'',
    fecha:'',
    hora:'',

  };

  componentes2: histo []=[
    {
      asignatura:'aplicaciones wed',
      seccion:'DBJ-D2',
      fecha:'20/10/2022',
      hora:'15:34:56',
    },
    {
      asignatura:'aplicaciones wed',
      seccion:'DBJ-D2',
      fecha:'21/10/2022',
      hora:'17:34:56',
    },
  ];
  
  //variables NgxQR ⬇
  name = 'Angular ';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value:string; //aqui colocar una variable
  backgroundColor = '#ffb60f'
  duocColorB = '#00263e'
  scale = 8
  //variables pagina ⬇
  display:boolean = false;
  asignatura:string = '';
  seccion:string = '';
  fecha:string = '';
  hora:string = '';
  secciontr2:string = '';
  

  constructor(private storage:Storage, private router:Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation().extras.state) {
        this.secciontr2 = this.router.getCurrentNavigation().extras.state.curso
        console.log(this.secciontr2);
      }
    })
   }

   async ngOnInit() {
    this.localstorage()
    if (this.componentes2 !=null) {
      let opcion = this.componentes2.some(res => res.seccion == this.secciontr2);
      if (opcion) {
        this.componentes2  = this.componentes2.filter(res => res.seccion == this.secciontr2);
        console.log(this.componentes2);
      }
    }

  }

  async genQR(){
    let h = await this.getFecha()
    this.fecha = h.toLocaleString().split(',')[0]
    this.hora = h.toLocaleString().split(',')[1]
    this.asignatura = await this.getDataAsignatura()
    this.seccion = await this.getDataSeccion()
    this.value = this.fecha+','+this.hora+','+this.asignatura+','+this.seccion
    console.log(this.value);
    this.display = !this.display
    await this.setStorageData()

    this.historial2.fecha = h.toLocaleString().split(',')[0]
    this.historial2.hora = h.toLocaleString().split(',')[1]
    this.historial2.asignatura = await this.getDataAsignatura()
    this.historial2.seccion = await this.getDataSeccion()
    this.componentes2.push(this.historial2)
    await this.setStoragehito(this.componentes2)


  }
  async getDataAsignatura(){
    return await this.storage.get('asignatura')
  }
  async getDataSeccion(){
    return await this.storage.get('seccion')
  }
  async getFecha(){
    let hr = new Date
    return hr
  }
  async setStorageData(){
    await this.storage.set("claseActual", this.value)
    console.log("HolaMundo");

  }
  async setStoragehito(plist){
    await localStorage.setItem("histori", JSON.stringify(plist))
    console.log("HolaMundo");
  }

  localstorage() {
    var storageList = localStorage.getItem('histori');
    if(storageList == null){
      this.componentes2 = []
    }
    else{
      this.componentes2 = JSON.parse(storageList)
    }
    return this.componentes2
    
  }


}