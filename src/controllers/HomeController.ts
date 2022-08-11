import { Controller, Get } from '@nestjs/common';

import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import ProjectMapper from '@src/mappers/ProjectMapper';
import ProjectRepository from '@src/repositories/ProjectRepository';
import Responder from '@src/utils/Responder';
import ServiceMapper from '@src/mappers/ServiceMapper';
import ServiceRepository from '@src/repositories/ServiceRepository';
import TestimonialMapper from '@src/mappers/TestimonialMapper';
import TestimonialRepository from '@src/repositories/TestimonialRepository';

@Controller('/home')
export default class HomeController {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly projectMapper: ProjectMapper,
    private readonly serviceRepository: ServiceRepository,
    private readonly serviceMapper: ServiceMapper,
    private readonly testimonialRepository: TestimonialRepository,
    private readonly testimonialMapper: TestimonialMapper,
    private readonly metaRepository: MetaRepository,
    private readonly responder: Responder,
  ) {}

  @Get('/')
  async list() {
    const meta = await this.metaRepository.findByKey(MetaKey.Home);
    const projects = await this.projectRepository.findInHome();
    const services = await this.serviceRepository.findAll();
    const testimonials = await this.testimonialRepository.findAll();
    const data = {
      projects: await Promise.all(
        projects.map((project) => this.projectMapper.toDto(project)),
      ),
      services: await Promise.all(
        services.map((service) => this.serviceMapper.toDto(service)),
      ),
      testimonials: await Promise.all(
        testimonials.map((testimonial) =>
          this.testimonialMapper.toDto(testimonial),
        ),
      ),
    };
    return this.responder.format(meta, data);
  }
}
