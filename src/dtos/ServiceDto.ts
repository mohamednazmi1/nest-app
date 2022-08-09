import BaseDto from './BaseDto';

export default interface ServiceDto extends BaseDto {
  name: string;
  brief: string;
}

export interface DetailedServiceDto extends ServiceDto {
  fillerText1: string;
  fillerText2: string;
  items: string[];
  projectImage: string;
}
