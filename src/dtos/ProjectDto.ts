import BaseDto from './BaseDto';
import Platform from '@src/shared/Platform';

export default interface ProjectDto extends BaseDto {
  title: string;
  brief: string;
}

export interface DetailedProjectDto extends ProjectDto {
  description: string;
  technologies: string[];
  categories: string[];
  platforms: Platform[];
  challenge: string;
  solution: string;
  outcome: string;
}
