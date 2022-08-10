import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import WorkBenefit from '@src/models/WorkBenefit';
import WorkBenefitDto from '@src/dtos/WorkBenefitDto';

@Injectable()
export default class WorkBenefitMapper extends BaseMapper<
  WorkBenefit,
  WorkBenefitDto
> {
  public toDto(workBenefit: WorkBenefit): WorkBenefitDto {
    return {
      id: workBenefit.id,
      slug: this.getSlug(workBenefit),
      title: workBenefit.title,
      description: workBenefit.description,
    };
  }
}
