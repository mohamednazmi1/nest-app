import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import HomeProject from '@src/models/HomeProject';

@Injectable()
export default class HomeProjectRepository extends BaseRepository<HomeProject> {
  protected relations: FindOptionsRelations<HomeProject> = {};

  constructor() {
    super(HomeProject);
  }
}
