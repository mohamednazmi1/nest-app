import BaseDto from './BaseDto';

export default interface CareerDto extends BaseDto {
  title: string;
  brief: string;
  description?: string;
  softSkills?: string;
  hardSkills?: string;
  perksAndBenefits?: string;
}
