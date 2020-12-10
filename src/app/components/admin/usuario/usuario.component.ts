import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

import * as CryptoJS from 'crypto-js';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../class/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    clientes: Usuario[];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let name = localStorage.getItem('hola');

    // this.nombre = this.usuario[0].NIKNAME;
    // console.log(this.usuario[0]);
    if (name == null) {

    } else {
      let eks = CryptoJS.AES.decrypt(localStorage.getItem('hola'), 'YoSoyGROoT9');
      let decryptedData = JSON.parse(eks.toString(CryptoJS.enc.Utf8));
      let dessc = JSON.stringify(decryptedData);
      // console.log(dessc);

      this.usuarioService.getUsuario(dessc).subscribe(
        (usuario) => {

          if (usuario.length === 0) {

            // this.router.navigate(['clientes/form']);

          } else {
            // this.usuario = usuario;
            console.log(usuario);
            // this.nombre = usuario.CURSOR_USUARIO[0].NIKNAME;

            this.clientes = usuario.CURSOR_USUARIO[0];
          }

          // funcion  anonima que recibe clientes y  que asinga =>
        }
      )
    }
    
  }

}
