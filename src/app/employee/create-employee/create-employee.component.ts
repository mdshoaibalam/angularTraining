import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from '../employee.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less']
})
export class CreateEmployeeComponent implements OnInit {
  employee:IEmployee;
  @ViewChild('createEmployee') public createEmployee:NgForm;
  constructor() { }

  ngOnInit() {
    this.employee = {
      id:null,
      name:null,
      email:null,
      gender:null,
      dateOfBirth:null,
      photoPath:null
    }
  }
  saveEmployee(){
    console.log(this.employee);
  }

}
