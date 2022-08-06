import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import Project from '@src/models/Project';
import ProjectDto from '@src/dtos/ProjectDto';

interface ProjectOptions {
  detailed: boolean;
}

@Injectable()
export default class ProjectMapper extends BaseMapper<Project, ProjectDto> {
  public toDto(project: Project, options?: ProjectOptions): ProjectDto {
    return !options?.detailed
      ? this.toShortDto(project)
      : this.toDetailedDto(project);
  }

  private toShortDto(project: Project): ProjectDto {
    return {
      id: project.id,
      slug: this.getSlug(project),
      title: project.title,
      brief: project.brief,
      technologies: project.technologies.map((technology) => technology.title),
    };
  }

  private toDetailedDto(project: Project): ProjectDto {
    return {
      ...this.toShortDto(project),
      description: project.description,
    };
  }
}
