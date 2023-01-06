import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  numero1=10;
  numero2=20;
  constructor() { }

  ngOnInit(): void {
  }

}
