import { Controller, Get } from '@nestjs/common';

import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import Responder from '@src/utils/Responder';
import SoftwareProcessMapper from '@src/mappers/SoftwareProcessMapper';
import SoftwareProcessRepository from '@src/repositories/SoftwareProcessRepository';

@Controller('/process')
export default class ProcessController {
  constructor(
    private readonly softwareProcessRepository: SoftwareProcessRepository,
    private readonly softwareProcessMapper: SoftwareProcessMapper,
    private readonly metaRepository: MetaRepository,
    private readonly responder: Responder,
  ) {}

  @Get('/')
  async list() {
    const meta = await this.metaRepository.findByKey(MetaKey.Process);
    const processes = await this.softwareProcessRepository.findAll();
    const data = {
      softwareProcesses: processes.map((process) =>
        this.softwareProcessMapper.toDto(process),
      ),
    };
    return this.responder.format(meta, data);
  }
}
