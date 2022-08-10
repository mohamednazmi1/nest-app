import BaseDto from './BaseDto';
import EmployeeDto from './EmployeeDto';
import TopicDto from './TopicDto';

export default interface PostDto extends BaseDto {
  title: string;
  brief: string;
  readTime: number;
  createdAt: Date;
  author: EmployeeDto;
  relatedTopic: TopicDto;
}

export interface DetailedPostDto extends PostDto {
  content: string;
}
