import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import EmployeeMapper from './EmployeeMapper';
import FileManager from '@src/utils/FileManager';
import Post from '@src/models/Post';
import PostDto, { DetailedPostDto } from '@src/dtos/PostDto';
import TopicMapper from './TopicMapper';

interface PostOptions {
  detailed: boolean;
}

@Injectable()
export default class PostMapper extends BaseMapper<Post, PostDto> {
  constructor(
    private readonly employeeMapper: EmployeeMapper,
    private readonly topicMapper: TopicMapper,
    private readonly fileManager: FileManager,
  ) {
    super();
  }

  public async toDto(post: Post, options?: PostOptions): Promise<PostDto> {
    return await (!options?.detailed
      ? this.toShortDto(post)
      : this.toDetailedDto(post));
  }

  private async toShortDto(post: Post): Promise<PostDto> {
    return {
      id: post.id,
      slug: this.getSlug(post),
      title: post.title,
      brief: post.brief,
      readTime: post.readTime,
      createdAt: post.createdAt,
      author: await this.employeeMapper.toDto(post.author),
      topic: this.topicMapper.toDto(post.topic),
      image: post.image && (await this.fileManager.getUrl(post.image)),
    };
  }

  private async toDetailedDto(post: Post): Promise<DetailedPostDto> {
    return {
      ...(await this.toShortDto(post)),
      content: post.content,
    };
  }
}
