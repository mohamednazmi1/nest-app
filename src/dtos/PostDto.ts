import BaseDto from './BaseDto';
import EmployeeDto from './EmployeeDto';
import TopicDto from './TopicDto';

export default interface PostDto extends BaseDto {
  title: string;
  brief: string;
  content?: string;
  readTime: number;
  numOfVisits: number;
  isPinned: boolean;
  author: EmployeeDto;
  relatedTopic: TopicDto;
}
