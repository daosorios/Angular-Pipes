import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//cambiar el idioma 
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';


registerLocaleData(localEs);
registerLocaleData(localFr);
////////

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DonSeguroPipe } from './pipes/don-seguro.pipe';
import { ActivarPipe } from './pipes/activar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DonSeguroPipe,
    ActivarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue:'es' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
