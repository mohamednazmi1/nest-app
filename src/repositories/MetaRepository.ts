import { FindOptionsRelations } from 'typeorm';
import { Injectable } from '@nestjs/common';

import BaseRepository from './BaseRepository';
import Meta from '@src/models/Meta';
import MetaKey from '@src/shared/MetaKey';

@Injectable()
export default class MetaRepository extends BaseRepository<Meta> {
  protected relations: FindOptionsRelations<Meta> = {};

  constructor() {
    super(Meta);
  }

  public async findByKey(key: MetaKey): Promise<Meta | null> {
    return await Meta.findOne({
      where: { key },
      relations: this.relations,
    });
  }
}
