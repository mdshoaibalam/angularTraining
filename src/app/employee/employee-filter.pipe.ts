import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter',
  pure:false
})
export class EmployeeFilterPipe implements PipeTransform {
 counter:number = 0;
  transform(employees: any[], searchTerm: string): any[] {
    this.counter++;
    //console.log(this.counter + "Times");
    if(!employees || !searchTerm){
      return employees;
    }

    return employees.filter((employee)=> employee.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    
  }

}
