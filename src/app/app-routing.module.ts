import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DesarrolloComponent } from './components/desarrollo/desarrollo.component';
import { PrincipalComponent } from './components/principal/principal.component';



const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'login', component: PrincipalComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'desarrollo', component: DesarrolloComponent},
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'principal', loadChildren: () => import('./components/principal/principal.module').then(m => m.PrincipalModule) },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: 'principal/inizio' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
