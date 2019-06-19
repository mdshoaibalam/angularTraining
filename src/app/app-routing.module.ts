import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsComponent } from './employee/show-employee/employee-details/employee-details.component';
import { CanDeActivateGuardService } from './employee/can-de-activate-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login.component';

const routes: Routes = [  
  // {path:'employees',component:EmployeeComponent},
  // {path:'employees/:empId/details',component:EmployeeDetailsComponent},
  // {path:'createEmployee',component:CreateEmployeeComponent,canDeactivate:[CanDeActivateGuardService]},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path: 'employees', loadChildren: './employee.module#EmployeeModule' },
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false,preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
