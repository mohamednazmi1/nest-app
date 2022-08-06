import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import Career from '@src/models/Career';

@Injectable()
export default class CareerRepository extends BaseRepository<Career> {
  protected relations: FindOptionsRelations<Career> = {};

  constructor() {
    super(Career);
  }
}
