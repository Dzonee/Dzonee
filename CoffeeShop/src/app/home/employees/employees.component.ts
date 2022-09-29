import { Component, OnInit } from '@angular/core';
import { IEmployees } from 'src/app/interfaces/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }

  public employees: IEmployees[]=[];

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeesService.getAll().subscribe(data=>{
      this.employees=data;
    })
  }

}
