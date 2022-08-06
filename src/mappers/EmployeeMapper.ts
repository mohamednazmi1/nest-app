import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import Employee from '@src/models/Employee';
import EmployeeDto from '@src/dtos/EmployeeDto';

@Injectable()
export default class EmployeeMapper extends BaseMapper<Employee, EmployeeDto> {
  public toDto(employee: Employee): EmployeeDto {
    return {
      id: employee.id,
      slug: this.getSlug(employee),
      name: employee.fullName,
      workPosition: employee.workPosition.trim(),
    };
  }
}
