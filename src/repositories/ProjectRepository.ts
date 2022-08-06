import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import Project from '@src/models/Project';

@Injectable()
export default class ProjectRepository extends BaseRepository<Project> {
  protected relations: FindOptionsRelations<Project> = { technologies: true };

  constructor() {
    super(Project);
  }
}
