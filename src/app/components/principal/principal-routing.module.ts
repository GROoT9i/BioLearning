import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursoResumenComponent } from './curso-resumen/curso-resumen.component';
import { CursoComponent } from './curso/curso.component';

import { InizioComponent } from './inizio/inizio.component';

import { PrincipalComponent } from './principal.component';

const routes: Routes = [{
  path: '', component: PrincipalComponent,
  children: [
    { path: 'inizio', component: InizioComponent},
    { path: 'curso', component: CursoComponent },
    { path: 'detalle', component: CursoDetalleComponent },
    { path: 'resumen', component: CursoResumenComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
