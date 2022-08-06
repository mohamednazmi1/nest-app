import { Injectable } from '@nestjs/common';

import BaseDto from '@src/dtos/BaseDto';
import BaseModel from '@src/models/BaseModel';

@Injectable()
export default abstract class BaseMapper<
  T extends BaseModel,
  U extends BaseDto,
> {
  public abstract toDto(entity: T, options?: object): U;

  protected getSlug(entity: T): string | undefined {
    return entity.slug || undefined;
  }
}
