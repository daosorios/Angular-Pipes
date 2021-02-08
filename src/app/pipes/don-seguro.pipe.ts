import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Pipe({
  name: 'donSeguro'
})
export class DonSeguroPipe implements PipeTransform {

  constructor(private domSanatizer:DomSanitizer){


  }

  //para pasar la url de confianza de otro dominio 
  transform(value: string, ...args: unknown[]): SafeResourceUrl  {
    return this.domSanatizer.bypassSecurityTrustResourceUrl( value );
  }

}
