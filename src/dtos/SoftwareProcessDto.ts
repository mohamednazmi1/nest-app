import BaseDto from './BaseDto';

export default interface SoftwareProcessDto extends BaseDto {
  title: string;
  fillerText1: string;
  fillerText2: string;
  points: string[];
}
