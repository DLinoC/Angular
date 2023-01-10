import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-hijo',
  templateUrl: './form-hijo.component.html',
  styleUrls: ['./form-hijo.component.css']
})
export class FormHijoComponent implements OnInit {
  @Input() values : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
