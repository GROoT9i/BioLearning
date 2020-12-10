import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '../../../class/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-setting',
  templateUrl: './usuario-setting.component.html',
  styleUrls: ['./usuario-setting.component.css']
})
export class UsuarioSettingComponent implements OnInit {

  usuario: Usuario = new Usuario();

  // combo: Combo = new Combo();
  // listar: Listar = new Listar();
  titulo: String ="agregando cliente";

  constructor(private clienteService: UsuarioService,
              // private direccionService: OdireccionService,
              private router: Router,
              private activatedRoute: ActivatedRoute){}


/*COMENTARLO  CON  ELIMINAR*/

 cargarCliente():void{

      this.activatedRoute.params.subscribe(params =>{

              let id  = params ['id']
              if (id){
                this.clienteService.getUsuario(id).subscribe((cliente) => {
                  this.usuario = cliente['CURSOR_USUARIO'][0];

                  


                  // if(cliente['CURSOR_USUARIO'][0].GENERO === 'F'){
                  //   this.selecF = true;
                  // }
                  // if(cliente['CURSOR_USUARIO'][0].GENERO === 'M'){
                  //   this.selecM = true;
                  // }

                });
                // se asigna  el cliente de la consulta al cliente como  objeto
              }

      });

 }


 public update():void{
   console.log(this.usuario);

  this.clienteService.update(this.usuario).subscribe(cliente =>{
      this.router.navigate(['/admin/usuario'])
  })
  
 }


 
 ngOnInit(){
  this.cargarCliente();

 }



}
