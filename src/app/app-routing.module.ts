import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsComponent } from './employee/show-employee/employee-details/employee-details.component';

const routes: Routes = [  
  {path:'employees',component:EmployeeComponent},
  {path:'employees/:empId/details',component:EmployeeDetailsComponent},
  {path:'createEmployee',component:CreateEmployeeComponent},
  {path:"",redirectTo:"/employees",pathMatch:"full"},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
