import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { InizioComponent } from './inizio/inizio.component';
import { HederComponent } from './heder/heder.component';
import { FoterComponent } from './foter/foter.component';
import { NavbComponent } from './navb/navb.component';
import { CursoComponent } from './curso/curso.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursoResumenComponent } from './curso-resumen/curso-resumen.component';


@NgModule({
  declarations: [PrincipalComponent, InizioComponent, HederComponent, FoterComponent, NavbComponent, CursoComponent, CursoDetalleComponent, CursoResumenComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ],
  providers:[UsuarioService]
})
export class PrincipalModule { }
