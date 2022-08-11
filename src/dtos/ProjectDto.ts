import BaseDto from './BaseDto';
import Platform from '@src/shared/Platform';

export default interface ProjectDto extends BaseDto {
  title: string;
  brief: string;
  technologies: string[];
  services: string[];
  image: string | null;
}

export interface DetailedProjectDto extends ProjectDto {
  description: string;
  categories: string[];
  platforms: Platform[];
  challenge: string;
  solution: string;
  outcome: string;
  coverImage: string | null;
}
