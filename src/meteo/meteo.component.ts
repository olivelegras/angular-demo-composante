import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  @Input() title: string;


  constructor() { }

  ngOnInit() {
  }

}