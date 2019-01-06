import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductsComponent} from './products/products.component';
import {AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

const routes:Routes=[
  {path:'products', component:ProductsComponent},
  {path:'about', component:AboutComponent},
  {path:'home', component:HomeComponent},
  {path:'auth', component:AuthComponent},
  {path: '' , redirectTo:'/home',pathMatch:'full'},
  {path:'*', redirectTo:'/home', pathMatch:'full'}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}