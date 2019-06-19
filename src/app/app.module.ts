import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {AppHome} from "./home.component";
import { FormsModule,ReactiveFormsModule} from "@angular/forms";

import { EmployeeDataService } from './employee/employee-data.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found.component';
import { CanDeActivateGuardService } from './employee/can-de-activate-guard.service';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home/home.component';
//import { EmployeeModule } from './employee.module';


@NgModule({
  declarations: [
    AppComponent,
    AppHome,
   
    PageNotFoundComponent,
    
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
   // EmployeeModule,
    AppRoutingModule,
    FormsModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeDataService,CanDeActivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
