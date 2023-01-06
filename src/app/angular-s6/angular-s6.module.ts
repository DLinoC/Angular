import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { TituloComponent } from './titulo/titulo.component';



@NgModule({
  declarations: [
    MenuComponent,
    CuerpoComponent,
    TituloComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    CuerpoComponent,
    TituloComponent,
  ]
})
export class ANGULARS6Module { }
