import BaseDto from './BaseDto';

export default interface ProjectDto extends BaseDto {
  title: string;
  brief: string;
  description?: string;
  technologies: string[];
}
