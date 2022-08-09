import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import BaseModel from './BaseModel';

@Entity({ name: 'software_processes' })
export default class SoftwareProcess extends BaseModel {
  @Column()
  title: string;

  @Column({ nullable: true })
  fillerText1: string;

  @Column({ nullable: true })
  fillerText2: string;

  @Column('character varying', { array: true, default: [] })
  items: string[];

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.title);
    this.metaTitle = this.title;
  }
}
