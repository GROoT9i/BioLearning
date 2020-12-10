import { Component, OnInit } from '@angular/core';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-inizio',
  templateUrl: './inizio.component.html',
  styleUrls: ['./inizio.component.css']
})
export class InizioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cond(): boolean {

    let email = localStorage.getItem('hola');

    if (email == null){

    console.log('no logeado')
    return false;
  }else{
    console.log('logeado');
    return true;
  }

  }

}
