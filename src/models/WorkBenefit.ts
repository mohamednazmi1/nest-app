import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import BaseModel from './BaseModel';

@Entity({ name: 'work_benefits' })
export default class WorkBenefit extends BaseModel {
  @Column()
  title: string;

  @Column()
  description: string;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.title);
    this.metaTitle = this.title;
  }
}
