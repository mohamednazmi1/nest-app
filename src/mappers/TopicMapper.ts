import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import Topic from '@src/models/Topic';
import TopicDto from '@src/dtos/TopicDto';

@Injectable()
export default class TopicMapper extends BaseMapper<Topic, TopicDto> {
  public toDto(topic: Topic): TopicDto {
    return {
      id: topic.id,
      slug: this.getSlug(topic),
      name: topic.name.trim(),
    };
  }
}
