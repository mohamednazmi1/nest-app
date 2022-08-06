import { Injectable } from '@nestjs/common';
import { FindOptionsRelations, FindOptionsWhere } from 'typeorm';

import BaseModel from '@src/models/BaseModel';
import Status from '@src/shared/Status';

@Injectable()
export default abstract class BaseRepository<T extends BaseModel> {
  protected abstract relations: FindOptionsRelations<T>;

  constructor(protected model: typeof BaseModel) {}

  public async findAll(): Promise<T[]> {
    return (await this.model.find({
      where: { status: Status.Published },
      order: { position: 'asc' },
      relations: this.relations,
    })) as T[];
  }

  public async findById(id: any): Promise<T | null> {
    const isNumber = !!+id;
    const where: FindOptionsWhere<T> = isNumber ? { id } : { slug: id };
    return (await this.model.findOne({
      where,
      relations: this.relations,
    })) as T | null;
  }
}
