import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import HomeProject from '@src/models/HomeProject';
import HomeProjectDto from '@src/dtos/HomeProjectDto';

@Injectable()
export default class HomeProjectMapper extends BaseMapper<
  HomeProject,
  HomeProjectDto
> {
  public toDto(homeProject: HomeProject): HomeProjectDto {
    return {
      id: homeProject.id,
      slug: this.getSlug(homeProject),
      title: homeProject.title,
      description: homeProject.description,
    };
  }
}
