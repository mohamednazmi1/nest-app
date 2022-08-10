import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import PostMapper from '@src/mappers/PostMapper';
import PostRepository from '@src/repositories/PostRepository';
import TopicMapper from '@src/mappers/TopicMapper';
import TopicRepository from '@src/repositories/TopicRepository';
import Responder from '@src/utils/Responder';

@Controller('/blogs')
export default class BlogController {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly postMapper: PostMapper,
    private readonly topicRepository: TopicRepository,
    private readonly topicMapper: TopicMapper,
    private readonly metaRepository: MetaRepository,
    private readonly responder: Responder,
  ) {}

  @Get('/')
  async list(@Query('topic') topicId?: number | string) {
    const meta = await this.metaRepository.findByKey(MetaKey.Blog);
    const posts = !topicId
      ? await this.postRepository.findAll()
      : await this.postRepository.findByTopic(topicId);
    const data = {
      posts: await Promise.all(
        posts.map((post) => this.postMapper.toDto(post)),
      ),
      ...(await this.getHighlights()),
    };
    return this.responder.format(meta, data);
  }

  @Get('/:id')
  async show(@Param('id') id: number | string, @Res() response: Response) {
    const post = await this.postRepository.findById(id);
    if (!post) {
      return this.responder.format404(response);
    }
    const morePosts = await this.postRepository.findMore(post.id, post.topicId);
    const data = {
      post: await this.postMapper.toDto(post, { detailed: true }),
      ...(await this.getHighlights()),
      morePosts: await Promise.all(
        morePosts.map((post) => this.postMapper.toDto(post)),
      ),
    };
    return this.responder.format(post, data, response);
  }

  private async getHighlights() {
    const topics = await this.topicRepository.findAll();
    const pinnedPosts = await this.postRepository.findPinned();
    const popularPosts = await this.postRepository.findPopular();
    return {
      topics: topics.map((topic) => this.topicMapper.toDto(topic)),
      pinnedPosts: await Promise.all(
        pinnedPosts.map((post) => this.postMapper.toDto(post)),
      ),
      popularPosts: await Promise.all(
        popularPosts.map((post) => this.postMapper.toDto(post)),
      ),
    };
  }
}
