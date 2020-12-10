import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';

import { LoginComponent } from './login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [{
  path: '', component: LoginComponent,
  children: [
    {
      path: 'login',
      component: IngresarComponent
    },
    {
      path: 'registro',
      component: RegistroComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
