import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import WorkBenefit from '@src/models/WorkBenefit';

@Injectable()
export default class WorkBenefitRepository extends BaseRepository<WorkBenefit> {
  protected relations: FindOptionsRelations<WorkBenefit> = {};

  constructor() {
    super(WorkBenefit);
  }
}
