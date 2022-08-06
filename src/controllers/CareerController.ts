import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

import CareerMapper from '@src/mappers/CareerMapper';
import CareerRepository from '@src/repositories/CareerRepository';
import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import Responder from '@src/utils/Responder';

@Controller('/careers')
export default class CareerController {
  constructor(
    private readonly careerRepository: CareerRepository,
    private readonly careerMapper: CareerMapper,
    private readonly metaRepository: MetaRepository,
    private readonly responder: Responder,
  ) {}

  @Get('/')
  async list() {
    const meta = await this.metaRepository.findByKey(MetaKey.Careers);
    const careers = await this.careerRepository.findAll();
    const data = {
      careers: careers.map((career) => this.careerMapper.toDto(career)),
    };
    return this.responder.format(meta, data);
  }

  @Get('/:id')
  async show(@Param('id') id: number | string, @Res() response: Response) {
    const career = await this.careerRepository.findById(id);
    if (!career) {
      return this.responder.format404(response);
    }
    const data = {
      career: this.careerMapper.toDto(career, { detailed: true }),
    };
    return this.responder.format(career, data, response);
  }
}
