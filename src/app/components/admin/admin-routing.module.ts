import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioSettingComponent } from './usuario-setting/usuario-setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'usuario-setting/:id',
    component: UsuarioSettingComponent
  }
]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
