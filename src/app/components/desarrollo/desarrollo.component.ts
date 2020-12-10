import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit {

  names: string[][];
  

  constructor() { }

  ngOnInit(): void {
    this.names = [
      ["modulo1","sesion1","http://embet.com/asdaFWergvsdf"],
      ["modulo1","session2","http://embet.com/asdaFWergvsdf"],
      ["modulo1","sesion3","http://embet.com/asdaFWergvsdf"],
      ["modulo1","session4","http://embet.com/asdaFWergvsdf"],
      ["modulo2","sesion1","http://embet.com/asdaFWergvsdf"],
      ["modulo2","session2","http://embet.com/asdaFWergvsdf"],
      ["modulo2","sesion3","http://embet.com/asdaFWergvsdf"],
      ["modulo2","session4","http://embet.com/asdaFWergvsdf"]
  ];
  }

}
