import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IEmployees } from '../interfaces/employees';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends ApiService<IEmployees> {

  constructor(public http: HttpClient) { 
    super(apiPaths.employees,http);
  }
}
