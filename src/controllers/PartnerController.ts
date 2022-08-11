import { Controller, Get } from '@nestjs/common';

import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import Responder from '@src/utils/Responder';
import TestimonialMapper from '@src/mappers/TestimonialMapper';
import TestimonialRepository from '@src/repositories/TestimonialRepository';

@Controller('/partners')
export default class PartnerController {
  constructor(
    private readonly testimonialRepository: TestimonialRepository,
    private readonly testimonialMapper: TestimonialMapper,
    private readonly metaRepository: MetaRepository,
    private readonly responder: Responder,
  ) {}

  @Get('/')
  async list() {
    const meta = await this.metaRepository.findByKey(MetaKey.Partner);
    const testimonials = await this.testimonialRepository.findAll();
    const data = {
      testimonials: await Promise.all(
        testimonials.map((testimonial) =>
          this.testimonialMapper.toDto(testimonial),
        ),
      ),
    };
    return this.responder.format(meta, data);
  }
}
