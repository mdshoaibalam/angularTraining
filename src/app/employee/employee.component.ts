import { Component, OnInit } from '@angular/core';

import { IEmployee } from './employee.model';
import { EmployeeDataService } from './employee-data.service';
import { retry,delay, retryWhen, scan, tap } from 'rxjs/operators';
import {SubscriptionLike} from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent {
  employees:any[];
  title: string;
  
  subscription:SubscriptionLike;
  message:string;
  constructor(private employeeDataService:EmployeeDataService) {
    let retryCounter = 1;
    this.message = "We are fetching the data please wait....."
    this.subscription = this.employeeDataService.getEmployees()    
     .pipe(
       retryWhen(errors => {
          return errors.pipe(
            scan((retryCounter)=>{
              retryCounter+=1;
              if(retryCounter<6){
                
                this.message = `Retrying... ${retryCounter} time(s)`;
                return retryCounter;
              }
              else{
                alert("server is down try later");
                throw (errors);
              }
            },0),
            delay(2000)
          )
       })     
     )
     
     .subscribe(
       (emp:any)=>{
       this.employees = emp.data;
     },
      (errors)=>{
          console.log("something went wrong please again");
      }
    );

   }
trackById(index,employees){
  return employees.id;
}
cancelRequest(){
  this.subscription.unsubscribe();
  this.message = "Request has been cancelled";
}

changeName(){
 this.employees[0].name = 'Taylor';
  // const newEmployee = Object.assign([],this.employees);
  // newEmployee[0].name = 'Taylor';
  // this.employees = newEmployee;
}
mouseMovement(){
  
}
handleChildComponentNotification(emp:IEmployee){
  this.title = emp.name + " of Id"+ emp.id;
}

getData(){
  // this.employees = [{
  //   id: 1,
  //   name: 'Mark',
  //   gender: 'Male',       
  //   email: 'mark@pwc.com',
  //   dateOfBirth: new Date('10/25/1988'),      
  //   photoPath: 'assets/images/mark.png'
  // },
  // {
  //   id: 2,
  //   name: 'Mary',
  //   gender: 'Female',       
  //   email: 'mary@pwc.com',
  //   dateOfBirth: new Date('10/20/1988'),      
  //   photoPath: 'assets/images/mary.png'
  // },
  // {
  //   id: 3,
  //   name: 'Tony',
  //   gender: 'Male',       
  //   email: 'tony@pwc.com',
  //   dateOfBirth: new Date('10/21/1994'),      
  //   photoPath: 'assets/images/tony.png'
  // }, 
  // {
  //   id: 4,
  //   name: 'Tony',
  //   gender: 'Male',       
  //   email: 'tony@pwc.com',
  //   dateOfBirth: new Date('10/21/1994'),      
  //   photoPath: 'assets/images/tony.png'
  // },
  // {
  //   id: 5,
  //   name: 'Tony',
  //   gender: 'Male',       
  //   email: 'tony@pwc.com',
  //   dateOfBirth: new Date('10/21/1994'),      
  //   photoPath: 'assets/images/tony.png'
  // }
  // ];
}

 
}
