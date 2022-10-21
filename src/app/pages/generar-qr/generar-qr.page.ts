import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

interface histo {
  asignatura:string ;
  seccion:string ;
  fecha:string ;
  hora:string ;

}

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {


  historial:histo ={
    asignatura:'',
    seccion:'',
    fecha:'',
    hora:'',

  };

  componentes: histo []=[
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
  

  constructor(private storage:Storage) { }

   ngOnInit() {
    this.localstorage()

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

    this.historial.fecha = h.toLocaleString().split(',')[0]
    this.historial.hora = h.toLocaleString().split(',')[1]
    this.historial.asignatura = await this.getDataAsignatura()
    this.historial.seccion = await this.getDataSeccion()
    this.componentes.push(this.historial)
    await this.setStoragehito(this.componentes)


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
      this.componentes = []
    }
    else{
      this.componentes = JSON.parse(storageList)
    }
    return this.componentes
    
  }


}
