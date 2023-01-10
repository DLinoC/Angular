import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { BodyComponent } from './body/body.component';
// import { AnswerComponent } from './answer/answer.component';
// import { CalculadoraComponent } from './calculadora/calculadora.component';
// import { ContactComponent } from './contact/contact.component';
// import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
// import { PipesPersoComponent } from './pipes-perso/pipes-perso.component';
// import { PipesDiapoComponent } from './pipes-diapo/pipes-diapo.component';
import { FormHijoComponent } from './form-hijo/form-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // BodyComponent,
    // AnswerComponent,
    // CalculadoraComponent,
    // ContactComponent,
    // ContactReactiveComponent, 
    // PipesPersoComponent,
    // PipesDiapoComponent,
    FormHijoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
