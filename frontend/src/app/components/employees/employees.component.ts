import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';


declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee;
    }
  }

  addEmployee(form: NgForm) {
    // console.log(form.value);
    if (form.value._id) {
      this.employeeService.putEmployee(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Update Successfuly'});
        this.getEmployees();
      });
    } else {
      this.employeeService.postEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Save Successfuly'});
          this.getEmployees();
        });
    }
  }

  getEmployees() {
    this.employeeService.getEployees()
      .subscribe(res => {
        this.employeeService.employess = res as Employee[];
        console.log(res);
      });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getEmployees();
          M.toast({html: 'Deleted succesfully'});
        });
    }
  }

}
