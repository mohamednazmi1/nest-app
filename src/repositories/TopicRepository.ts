import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import Topic from '@src/models/Topic';

@Injectable()
export default class TopicRepository extends BaseRepository<Topic> {
  protected relations: FindOptionsRelations<Topic> = {};

  constructor() {
    super(Topic);
  }
}
