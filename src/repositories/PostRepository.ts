import { FindOptionsRelations, FindOptionsWhere } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import Post from '@src/models/Post';
import Status from '@src/shared/Status';
import Topic from '@src/models/Topic';

@Injectable()
export default class PostRepository extends BaseRepository<Post> {
  protected relations: FindOptionsRelations<Post> = {
    author: true,
    topic: true,
  };

  constructor() {
    super(Post);
  }

  public async findByTopic(topicId: any): Promise<Post[]> {
    const isNumber = !!+topicId;
    const where: FindOptionsWhere<Topic> = isNumber
      ? { id: topicId }
      : { slug: topicId };
    return await Post.find({
      where: { status: Status.Published, topic: where },
      order: { position: 'asc' },
      relations: this.relations,
    });
  }
}
