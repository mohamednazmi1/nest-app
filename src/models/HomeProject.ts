import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import BaseModel from './BaseModel';

@Entity({ name: 'home_page_projects' })
export default class HomeProject extends BaseModel {
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
