import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

import CareerMapper from '@src/mappers/CareerMapper';
import CareerRepository from '@src/repositories/CareerRepository';
import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import Responder from '@src/utils/Responder';
import WorkBenefitMapper from '@src/mappers/WorkBenefitMapper';
import WorkBenefitRepository from '@src/repositories/WorkBenefitRepository';

@Controller('/careers')
export default class CareerController {
  constructor(
    private readonly careerRepository: CareerRepository,
    private readonly careerMapper: CareerMapper,
    private readonly workBenefitRepository: WorkBenefitRepository,
    private readonly workBenefitMapper: WorkBenefitMapper,
    private readonly metaRepository: MetaRepository,
    private readonly responder: Responder,
  ) {}

  @Get('/')
  async list() {
    const meta = await this.metaRepository.findByKey(MetaKey.Careers);
    const benefits = await this.workBenefitRepository.findAll();
    const careers = await this.careerRepository.findAll();
    const data = {
      benefits: await Promise.all(
        benefits.map((benefit) => this.workBenefitMapper.toDto(benefit)),
      ),
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
