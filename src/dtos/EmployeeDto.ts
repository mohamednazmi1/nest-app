import BaseDto from './BaseDto';

export default interface EmployeeDto extends BaseDto {
  name: string;
  workPosition: string;
}
