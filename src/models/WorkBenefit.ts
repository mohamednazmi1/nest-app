import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import BaseModel from './BaseModel';
import File from '../shared/File';
import { TrimTransformer } from './transformers';

@Entity({ name: 'work_benefits' })
export default class WorkBenefit extends BaseModel {
  @Column({ unique: true, transformer: TrimTransformer })
  title: string;

  @Column({ transformer: TrimTransformer })
  description: string;

  @Column('jsonb', { nullable: true })
  image: File;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.title);
    this.metaTitle = this.title;
  }
}
