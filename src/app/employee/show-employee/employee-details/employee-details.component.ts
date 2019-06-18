import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})
export class EmployeeDetailsComponent implements OnInit {
  public employeeId: any;

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.employeeId=this.activatedRoute.snapshot.params["empId"];
  }
  backtoList(){
    this.router.navigate(["/employees"]);
  }

}
