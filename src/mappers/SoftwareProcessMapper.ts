import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import SoftwareProcess from '@src/models/SoftwareProcess';
import SoftwareProcessDto from '@src/dtos/SoftwareProcessDto';

@Injectable()
export default class SoftwareProcessMapper extends BaseMapper<
  SoftwareProcess,
  SoftwareProcessDto
> {
  public toDto(process: SoftwareProcess): SoftwareProcessDto {
    return {
      id: process.id,
      slug: this.getSlug(process),
      title: process.title,
      fillerText1: process.fillerText1,
      fillerText2: process.fillerText2,
      items: process.items,
    };
  }
}
