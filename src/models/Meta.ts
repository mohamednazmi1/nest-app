import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import BaseModel from './BaseModel';
import MetaKey from '@src/shared/MetaKey';

@Entity({ name: 'meta' })
export default class Meta extends BaseModel {
  @Column({ unique: true })
  key: MetaKey;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.key);
    this.metaTitle = this.key;
  }
}
