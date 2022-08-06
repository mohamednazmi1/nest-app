import { Controller, Get } from '@nestjs/common';

import HomeProjectMapper from '@src/mappers/HomeProjectMapper';
import HomeProjectRepository from '@src/repositories/HomeProjectRepository';
import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import Responder from '@src/utils/Responder';
import ServiceMapper from '@src/mappers/ServiceMapper';
import ServiceRepository from '@src/repositories/ServiceRepository';
import TestimonialMapper from '@src/mappers/TestimonialMapper';
import TestimonialRepository from '@src/repositories/TestimonialRepository';

@Controller('/home')
export default class HomeController {
  constructor(
    private readonly projectRepository: HomeProjectRepository,
    private readonly projectMapper: HomeProjectMapper,
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
    const projects = await this.projectRepository.findAll();
    const services = await this.serviceRepository.findAll();
    const testimonials = await this.testimonialRepository.findAll();
    const data = {
      projects: projects.map((project) => this.projectMapper.toDto(project)),
      services: services.map((service) => this.serviceMapper.toDto(service)),
      testimonials: testimonials.map((testimonial) =>
        this.testimonialMapper.toDto(testimonial),
      ),
    };
    return this.responder.format(meta, data);
  }
}
