import BaseDto from './BaseDto';

export default interface ServiceDto extends BaseDto {
  name: string;
  brief: string;
  fillerText1?: string;
  fillerText2?: string;
  relatedServices?: string[];
  projectImage?: string;
}
