import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less']
})
export class CreateEmployeeComponent implements OnInit {
  employee:IEmployee;
  constructor() { }

  ngOnInit() {
  }

}
