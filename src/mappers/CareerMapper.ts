import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import Career from '@src/models/Career';
import CareerDto, { DetailedCareerDto } from '@src/dtos/CareerDto';

interface CareerOptions {
  detailed: boolean;
}

@Injectable()
export default class CareerMapper extends BaseMapper<Career, CareerDto> {
  public toDto(career: Career, options?: CareerOptions): CareerDto {
    return !options?.detailed
      ? this.toShortDto(career)
      : this.toDetailedDto(career);
  }

  private toShortDto(career: Career): CareerDto {
    return {
      id: career.id,
      slug: this.getSlug(career),
      title: career.title,
      brief: career.brief,
    };
  }

  private toDetailedDto(career: Career): DetailedCareerDto {
    return {
      ...this.toShortDto(career),
      description: career.description,
      softSkills: career.softSkills,
      hardSkills: career.hardSkills,
      perksAndBenefits: career.perksAndBenefits,
    };
  }
}
