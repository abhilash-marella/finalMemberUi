import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DependantinfoComponent } from './dependantinfo/dependantinfo.component';
import { MyclaimsComponent } from './myclaims/myclaims.component';
// import { AuthGuard } from '../gaurd/auth.guard';
// import { AuthService } from '../gaurd/auth.service';

const routes: Routes = [
  {path:'dependantinfo',component:DependantinfoComponent},
  {path:'myclaims',component:MyclaimsComponent}
  ];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
 })
export class UserModule { }
