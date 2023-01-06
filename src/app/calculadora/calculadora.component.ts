import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  title = 'operaciones';
   // cantidadone: number;
   numero1 !:number;
   numero2 !: number;
   resultado !: number;
   noresultado="(No eligio operación)";
   num="Elige una opción"
  constructor() { }

  ngOnInit(): void {
  }

}
