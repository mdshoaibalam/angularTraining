import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';

import { EmployeeDetailsComponent } from './employee/show-employee/employee-details/employee-details.component';
import { CanDeActivateGuardService } from './employee/can-de-activate-guard.service';


const routes: Routes = [  
  {path:'list',component:EmployeeComponent},
  {path:'list/:empId/details',component:EmployeeDetailsComponent},
  {path:'createEmployee',component:CreateEmployeeComponent,canDeactivate:[CanDeActivateGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 // exports: [RouterModule]
})
export class EmployeeRoutingModule { }
