import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../class/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  usuario: Usuario = new Usuario(); // importamos como objeto a la clase usuarios
  confpassword:String;

  constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  // consumiendo el  metodo  create  de cliente.service
  public create(): void {

    this.usuarioService.create(this.usuario).subscribe(
      (Response) => this.router.navigate(['/inicio'])) // despues de ejecutar el metodo redirecciona

    //  AQUI VOY A AGREGAR UN VALIDACION DE SI SE INSETO POSITIVAMENTE


  }

  ngOnInit(): void {
  }


}
