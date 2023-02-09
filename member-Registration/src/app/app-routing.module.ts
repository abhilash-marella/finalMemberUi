import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './gaurd/auth.guard';
// import { AuthService } from './gaurd/auth.service';
 import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ClaimComponent } from './claim/claim.component';
import { DependantComponent } from './dependant/dependant.component';
const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'register', component: RegisterComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'dependant', component: DependantComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
