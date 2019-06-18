import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {AppHome} from "./home.component";
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule} from "@angular/forms";
import { EmployeeFilterPipe } from './employee/employee-filter.pipe';
import { AddBorderColorDirective } from './employee/add-border-color.directive';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { EmployeeDataService } from './employee/employee-data.service';
import {HttpClientModule} from '@angular/common/http';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsComponent } from './employee/show-employee/employee-details/employee-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHome,
    EmployeeComponent,
    EmployeeFilterPipe,
    AddBorderColorDirective,
    ShowEmployeeComponent,
    CreateEmployeeComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
