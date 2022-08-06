import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import Testimonial from '@src/models/Testimonial';

@Injectable()
export default class TestimonialRepository extends BaseRepository<Testimonial> {
  protected relations: FindOptionsRelations<Testimonial> = {};

  constructor() {
    super(Testimonial);
  }
}
