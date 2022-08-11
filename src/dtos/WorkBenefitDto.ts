import BaseDto from './BaseDto';

export default interface WorkBenefitDto extends BaseDto {
  title: string;
  description: string;
  image: string | null;
}
