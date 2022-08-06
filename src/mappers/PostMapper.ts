import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import EmployeeMapper from './EmployeeMapper';
import Post from '@src/models/Post';
import PostDto from '@src/dtos/PostDto';
import TopicMapper from './TopicMapper';

interface PostOptions {
  detailed: boolean;
}

@Injectable()
export default class PostMapper extends BaseMapper<Post, PostDto> {
  constructor(
    private readonly employeeMapper: EmployeeMapper,
    private readonly topicMapper: TopicMapper,
  ) {
    super();
  }

  public toDto(post: Post, options?: PostOptions): PostDto {
    return !options?.detailed
      ? this.toShortDto(post)
      : this.toDetailedDto(post);
  }

  private toShortDto(post: Post): PostDto {
    return {
      id: post.id,
      slug: this.getSlug(post),
      title: post.title,
      brief: post.brief,
      readTime: post.readTime,
      numOfVisits: post.numOfVisits,
      isPinned: post.isPinned,
      author: this.employeeMapper.toDto(post.author),
      relatedTopic: this.topicMapper.toDto(post.topic),
    };
  }

  private toDetailedDto(post: Post): PostDto {
    return {
      ...this.toShortDto(post),
      content: post.content,
    };
  }
}
