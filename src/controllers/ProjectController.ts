import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import ProjectMapper from '@src/mappers/ProjectMapper';
import ProjectRepository from '@src/repositories/ProjectRepository';
import Responder from '@src/utils/Responder';
import ServiceMapper from '@src/mappers/ServiceMapper';
import ServiceRepository from '@src/repositories/ServiceRepository';

@Controller('/projects')
export default class ProjectController {
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
    const meta = await this.metaRepository.findByKey(MetaKey.Portfolio);
    const services = await this.serviceRepository.findAll();
    const projects = await this.projectRepository.findAll();
    const data = {
      services: await Promise.all(
        services.map((service) => this.serviceMapper.toDto(service)),
      ),
      projects: await Promise.all(
        projects.map((project) => this.projectMapper.toDto(project)),
      ),
    };
    return this.responder.format(meta, data);
  }

  @Get('/:id')
  async show(@Param('id') id: number | string, @Res() response: Response) {
    const project = await this.projectRepository.findById(id);
    if (!project) {
      return this.responder.format404(response);
    }
    const moreProjects = await this.projectRepository.findMore(project.id);
    const data = {
      project: await this.projectMapper.toDto(project, { detailed: true }),
      moreProjects: await Promise.all(
        moreProjects.map((project) => this.projectMapper.toDto(project)),
      ),
    };
    return this.responder.format(project, data, response);
  }
}
