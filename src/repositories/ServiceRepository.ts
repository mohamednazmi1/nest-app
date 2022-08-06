import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import Service from '@src/models/Service';

@Injectable()
export default class ServiceRepository extends BaseRepository<Service> {
  protected relations: FindOptionsRelations<Service> = {
    relatedServices: true,
    projects: true,
  };

  constructor() {
    super(Service);
  }
}
