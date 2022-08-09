import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import Testimonial from '@src/models/Testimonial';
import TestimonialDto from '@src/dtos/TestimonialDto';

@Injectable()
export default class TestimonialMapper extends BaseMapper<
  Testimonial,
  TestimonialDto
> {
  public toDto(testimonial: Testimonial): TestimonialDto {
    return {
      id: testimonial.id,
      slug: this.getSlug(testimonial),
      description: testimonial.description,
      clutchUrl: testimonial.clutchUrl,
      author: {
        name: testimonial.authorName,
        position: testimonial.authorPosition,
      },
    };
  }
}
