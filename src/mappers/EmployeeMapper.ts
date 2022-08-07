import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import Employee from '@src/models/Employee';
import EmployeeDto from '@src/dtos/EmployeeDto';
import FileManager from '@src/utils/FileManager';

@Injectable()
export default class EmployeeMapper extends BaseMapper<Employee, EmployeeDto> {
  constructor(private readonly fileManager: FileManager) {
    super();
  }

  public async toDto(employee: Employee): Promise<EmployeeDto> {
    return {
      id: employee.id,
      slug: this.getSlug(employee),
      name: employee.name,
      workPosition: employee.workPosition,
      image: employee.image && (await this.fileManager.getUrl(employee.image)),
    };
  }
}
