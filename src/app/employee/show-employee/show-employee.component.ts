import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.less']
})
export class ShowEmployeeComponent implements OnInit {
  
  @Input() employee:IEmployee;

  @Output() selectedEmployeeName:EventEmitter<IEmployee>  = new EventEmitter<IEmployee>();
  constructor(private employeeDataService:EmployeeDataService) {
   
   // console.log(this.employeeDataService);
   }

  ngOnInit() {
  }
  handleClick(){
    this.selectedEmployeeName.emit(this.employee);
  }

  getEmployeeName(){
    return this.employee.name;
  }
}
