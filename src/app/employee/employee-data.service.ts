import { Injectable } from '@angular/core';
import { IEmployee } from './employee.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { IPromise } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  defaultName:string;
  employees:IEmployee[] =[{
    id: 1,
    name: 'Mark',
    gender: 'Male',       
    email: 'mark@pwc.com',
    dateOfBirth: new Date('10/25/1988'),      
    photoPath: 'assets/images/mark.png'
  },
  {
    id: 2,
    name: 'Mary',
    gender: 'Female',       
    email: 'mary@pwc.com',
    dateOfBirth: new Date('10/20/1988'),      
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 3,
    name: 'Tony',
    gender: 'Male',       
    email: 'tony@pwc.com',
    dateOfBirth: new Date('10/21/1994'),      
    photoPath: 'assets/images/tony.png'
  }, 
  ]; ;
  constructor(private http:HttpClient) { 
    this.defaultName = "Test";
    console.log("new instance created");
  }

  getEmployees():Observable<IEmployee[]>{
    // return of(this.employees)
    // .pipe(
    //   delay(5000)
    // );
    return this.http.get<IEmployee[]>('http://localhost:8080/api/employees');
  }
}
