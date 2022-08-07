import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import PostMapper from '@src/mappers/PostMapper';
import PostRepository from '@src/repositories/PostRepository';
import Responder from '@src/utils/Responder';

@Controller('/blogs')
export default class BlogController {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly postMapper: PostMapper,
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
      blogs: await Promise.all(
        posts.map((post) => this.postMapper.toDto(post)),
      ),
    };
    return this.responder.format(meta, data);
  }

  @Get('/:id')
  async show(@Param('id') id: number | string, @Res() response: Response) {
    const post = await this.postRepository.findById(id);
    if (!post) {
      return this.responder.format404(response);
    }
    const data = {
      blog: await this.postMapper.toDto(post, { detailed: true }),
    };
    return this.responder.format(post, data, response);
  }
}
