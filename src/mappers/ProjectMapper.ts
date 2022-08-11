import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import FileManager from '@src/utils/FileManager';
import Project from '@src/models/Project';
import ProjectDto, { DetailedProjectDto } from '@src/dtos/ProjectDto';

interface ProjectOptions {
  detailed: boolean;
}

@Injectable()
export default class ProjectMapper extends BaseMapper<Project, ProjectDto> {
  constructor(private readonly fileManager: FileManager) {
    super();
  }

  public async toDto(
    project: Project,
    options?: ProjectOptions,
  ): Promise<ProjectDto> {
    return await (!options?.detailed
      ? this.toShortDto(project)
      : this.toDetailedDto(project));
  }

  private async toShortDto(project: Project): Promise<ProjectDto> {
    return {
      id: project.id,
      slug: this.getSlug(project),
      title: project.title,
      brief: project.brief,
      technologies: project.technologies.map((technology) => technology.title),
      services: project.services.map((service) => service.name),
      image: project.image && (await this.fileManager.getUrl(project.image)),
    };
  }

  private async toDetailedDto(project: Project): Promise<DetailedProjectDto> {
    return {
      ...(await this.toShortDto(project)),
      description: project.description,
      categories: project.categories,
      platforms: project.platforms,
      challenge: project.challenge,
      solution: project.solution,
      outcome: project.outcome,
      coverImage:
        project.coverImage &&
        (await this.fileManager.getUrl(project.coverImage)),
    };
  }
}
