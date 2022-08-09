import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import Project from '@src/models/Project';
import Status from '@src/shared/Status';

@Injectable()
export default class ProjectRepository extends BaseRepository<Project> {
  protected relations: FindOptionsRelations<Project> = { technologies: true };

  constructor() {
    super(Project);
  }

  public async findInHome(): Promise<Project[]> {
    return await Project.find({
      where: { status: Status.Published, home: true },
      order: { position: 'asc' },
      relations: this.relations,
    });
  }
}
