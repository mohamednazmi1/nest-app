import { Controller, Get } from '@nestjs/common';

import EmployeeMapper from '@src/mappers/EmployeeMapper';
import EmployeeRepository from '@src/repositories/EmployeeRepository';
import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import Responder from '@src/utils/Responder';

@Controller('/team')
export default class TeamController {
  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly employeeMapper: EmployeeMapper,
    private readonly metaRepository: MetaRepository,
    private readonly responder: Responder,
  ) {}

  @Get('/')
  async list() {
    const meta = await this.metaRepository.findByKey(MetaKey.Team);
    const employees = await this.employeeRepository.findAll();
    const data = {
      employees: employees.map((employee) =>
        this.employeeMapper.toDto(employee),
      ),
    };
    return this.responder.format(meta, data);
  }
}
