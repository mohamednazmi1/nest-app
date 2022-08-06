import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import SoftwareProcess from '@src/models/SoftwareProcess';

@Injectable()
export default class SoftwareProcessRepository extends BaseRepository<SoftwareProcess> {
  protected relations: FindOptionsRelations<SoftwareProcess> = {
    points: true,
  };

  constructor() {
    super(SoftwareProcess);
  }
}
