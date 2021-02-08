import { Component, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  
  nombre:string="Daniela Osorio";

  arreglo=[1,2,3,4,5,6,7,8,9,10];

  PI:number=Math.PI;

  porcentaje: number=0.543;

  salario:number= 1234.5;

  fecha:Date = new  Date();

  idiomas:string='es';

  personal:string='dAnielA oSorIO sanTAnA';
  
  video:string="https://www.youtube.com/embed/H3_ADY2O0w0" 

  ver:boolean=true;


  
  heroe={
    nombre:'Logan',
    clave:'wolverine',
    edad:45,
    direccion:{
      calle:'Avenida los mosquitos',
      casa:2
    }
  }

  valorPromesa= new Promise<string>((resolve)=>{
    setTimeout(() => {
      resolve('llego la data')
    }, 4500);
  });

 

}
