import { Injectable } from '@angular/core';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class CanDeActivateGuardService implements CanDeactivate<CreateEmployeeComponent> {

  constructor() { }
  canDeactivate(component:CreateEmployeeComponent){
    if(component.createEmployee.dirty){
    return confirm("Are u sure want to disard");
  }
  return true;
  }
  
}
