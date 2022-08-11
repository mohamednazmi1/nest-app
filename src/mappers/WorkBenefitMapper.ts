import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import FileManager from '@src/utils/FileManager';
import WorkBenefit from '@src/models/WorkBenefit';
import WorkBenefitDto from '@src/dtos/WorkBenefitDto';

@Injectable()
export default class WorkBenefitMapper extends BaseMapper<
  WorkBenefit,
  WorkBenefitDto
> {
  constructor(private readonly fileManager: FileManager) {
    super();
  }

  public async toDto(workBenefit: WorkBenefit): Promise<WorkBenefitDto> {
    return {
      id: workBenefit.id,
      slug: this.getSlug(workBenefit),
      title: workBenefit.title,
      description: workBenefit.description,
      image:
        workBenefit.image && (await this.fileManager.getUrl(workBenefit.image)),
    };
  }
}
