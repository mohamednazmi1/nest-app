import { Controller, Get } from '@nestjs/common';

import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import ProjectMapper from '@src/mappers/ProjectMapper';
import ProjectRepository from '@src/repositories/ProjectRepository';
import Responder from '@src/utils/Responder';
import ServiceMapper from '@src/mappers/ServiceMapper';
import ServiceRepository from '@src/repositories/ServiceRepository';

@Controller('/services')
export default class ServiceController {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly projectMapper: ProjectMapper,
    private readonly serviceRepository: ServiceRepository,
    private readonly serviceMapper: ServiceMapper,
    private readonly metaRepository: MetaRepository,
    private readonly responder: Responder,
  ) {}

  @Get('/')
  async list() {
    const meta = await this.metaRepository.findByKey(MetaKey.Services);
    const services = await this.serviceRepository.findAll();
    const projects = await this.projectRepository.findInHome();
    const data = {
      services: await Promise.all(
        services.map((service) =>
          this.serviceMapper.toDto(service, { detailed: true }),
        ),
      ),
      projects: await Promise.all(
        projects.map((project) => this.projectMapper.toDto(project)),
      ),
    };
    return this.responder.format(meta, data);
  }
}
