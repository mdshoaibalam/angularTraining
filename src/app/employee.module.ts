import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFilterPipe } from './employee/employee-filter.pipe';
import { AddBorderColorDirective } from './employee/add-border-color.directive';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee/show-employee/employee-details/employee-details.component';
import { EmployeeRoutingModule } from './employee-routing.module';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFilterPipe,
    AddBorderColorDirective,
    ShowEmployeeComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    EmployeeRoutingModule,
    FormsModule,    
    ReactiveFormsModule,
    CommonModule
  ]
})
export class EmployeeModule { }
