import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne } from 'typeorm';

import BaseModel from './BaseModel';
import Project from './Project';

@Entity({ name: 'testimonials' })
export default class Testimonial extends BaseModel {
  @Column()
  authorName: string;

  @Column()
  authorPosition: string;

  @Column()
  description: string;

  @ManyToOne(() => Project, (project) => project.testimonials, {
    nullable: true,
  })
  project: Project;

  /* @Column({ nullable: true })
  clutchUrl: string; */

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.authorName);
    this.metaTitle = this.authorName;
  }
}
