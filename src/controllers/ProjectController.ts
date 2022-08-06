import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import Responder from '@src/utils/Responder';
import ProjectMapper from '@src/mappers/ProjectMapper';
import ProjectRepository from '@src/repositories/ProjectRepository';

@Controller('/projects')
export default class ProjectController {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly projectMapper: ProjectMapper,
    private readonly metaRepository: MetaRepository,
    private readonly responder: Responder,
  ) {}

  @Get('/')
  async list() {
    const meta = await this.metaRepository.findByKey(MetaKey.Portfolio);
    const projects = await this.projectRepository.findAll();
    const data = {
      projects: projects.map((project) => this.projectMapper.toDto(project)),
    };
    return this.responder.format(meta, data);
  }

  @Get('/:id')
  async show(@Param('id') id: number | string, @Res() response: Response) {
    const project = await this.projectRepository.findById(id);
    if (!project) {
      return this.responder.format404(response);
    }
    const data = {
      project: this.projectMapper.toDto(project, { detailed: true }),
    };
    return this.responder.format(project, data, response);
  }
}
