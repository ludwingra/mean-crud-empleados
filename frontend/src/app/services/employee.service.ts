import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employess: Employee[];
  readonly URL_API = 'http://localhost:3000/api/employess';

  constructor(
    private http: HttpClient
  ) {
    this.selectedEmployee = new Employee();
   }

  getEployees() {
    return this.http.get(this.URL_API);
  }

  postEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  putEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
