import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipes-diapo',
  templateUrl: './pipes-diapo.component.html',
  styleUrls: ['./pipes-diapo.component.css']
})
export class PipesDiapoComponent implements OnInit {
  valor !: string;
  moneda !: string;
  error="(Escriba un numero)";
  num="Elige una opción";
  
  constructor() { }

  ngOnInit(): void {
  }

}
