import {
  FindOptionsOrder,
  FindOptionsRelations,
  FindOptionsWhere,
  Not,
} from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import Post from '@src/models/Post';
import Status from '@src/shared/Status';
import Topic from '@src/models/Topic';

@Injectable()
export default class PostRepository extends BaseRepository<Post> {
  protected order: FindOptionsOrder<Post> = { createdAt: 'desc' };
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
      order: this.order,
      relations: this.relations,
    });
  }

  public async findMore(id: number, topicId: number): Promise<Post[]> {
    return await Post.find({
      where: { status: Status.Published, id: Not(id), topic: { id: topicId } },
      order: this.order,
      take: 2,
      relations: this.relations,
    });
  }

  public async findPinned(): Promise<Post[]> {
    return await Post.find({
      where: { status: Status.Published, isPinned: true },
      order: { position: 'asc' },
      relations: this.relations,
    });
  }

  public async findPopular(): Promise<Post[]> {
    return await Post.find({
      where: { status: Status.Published },
      order: { numOfVisits: 'desc' },
      take: 3,
      relations: this.relations,
    });
  }
}
