import { Component, OnInit, Injectable  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../class/usuario';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  email: string;
  password: string;
  usuario: Usuario = new Usuario(); // importamos como objeto a la clase usuarios
  miArrayDesencriptado: string;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  valUsuario(): void {
    // localStorage.setItem(‘name’,’Nixon’);
    // let name = localStorage.getItem(‘name’);
    // localStorage.removeItem(‘name’);

    // console.log(this.email, this.password);
    this.usuarioService.valUsuario(this.email, this.password).subscribe(
      (usuarios) => {

        if (usuarios.length === 0){
          console.log(usuarios);

        }else{
          // let encryptedText = _self._AESEncryptDecryptService.encrypt("Hello World");
          // let decryptedText = _self._AESEncryptDecryptService.decrypt(encryptedText);
          // localStorage.setItem('email', usuarios.CURSOR_USUARIO[0].ID_USUARIO);

          var ciphertext  = CryptoJS.AES.encrypt(JSON.stringify(usuarios.CURSOR_USUARIO[0].ID_USUARIO), 'YoSoyGROoT9');
          localStorage.setItem('hola', ciphertext.toString());

          // this.user = usuarios;
          // console.log(Object.values(this.user));
          // console.log(usuarios);
          this.usuario = usuarios.CURSOR_USUARIO;

          // console.log(usuarios.CURSOR_USUARIO[0].NIKNAME);                   //USARRR

          // console.log(this.usuario);
          // console.log(this.usuario[0].EMAIL);                    //ESTE

          // window.location.reload();

          this.router.navigate(['/principal/inizio']);
        }
        // funcion  anonima que recibe clientes y  que asinga =>
      }
  );

  }

}
