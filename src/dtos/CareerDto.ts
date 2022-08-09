import BaseDto from './BaseDto';

export default interface CareerDto extends BaseDto {
  title: string;
  brief: string;
}

export interface DetailedCareerDto extends CareerDto {
  description: string;
  softSkills: string[];
  hardSkills: string[];
  perksAndBenefits: string[];
}
