import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import Employee from '@src/models/Employee';

@Injectable()
export default class EmployeeRepository extends BaseRepository<Employee> {
  protected relations: FindOptionsRelations<Employee> = {};

  constructor() {
    super(Employee);
  }
}
