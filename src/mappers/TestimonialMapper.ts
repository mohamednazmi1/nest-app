import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import FileManager from '@src/utils/FileManager';
import Testimonial from '@src/models/Testimonial';
import TestimonialDto from '@src/dtos/TestimonialDto';

@Injectable()
export default class TestimonialMapper extends BaseMapper<
  Testimonial,
  TestimonialDto
> {
  constructor(private readonly fileManager: FileManager) {
    super();
  }

  public async toDto(testimonial: Testimonial): Promise<TestimonialDto> {
    return {
      id: testimonial.id,
      slug: this.getSlug(testimonial),
      description: testimonial.description,
      clutchUrl: testimonial.clutchUrl,
      author: {
        name: testimonial.authorName,
        position: testimonial.authorPosition,
        image:
          testimonial.authorImage &&
          (await this.fileManager.getUrl(testimonial.authorImage)),
      },
    };
  }
}
