import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  RelationId,
} from 'typeorm';

import BaseModel from './BaseModel';
import File from '../shared/File';
import Project from './Project';
import { TrimTransformer } from './transformers';

@Entity({ name: 'testimonials' })
export default class Testimonial extends BaseModel {
  @Column({ transformer: TrimTransformer })
  authorName: string;

  @Column({ transformer: TrimTransformer })
  authorPosition: string;

  @Column('jsonb', { nullable: true })
  authorImage: File;

  @Column({ transformer: TrimTransformer })
  description: string;

  @Column({ nullable: true })
  clutchUrl: string;

  @ManyToOne(() => Project, (project) => project.testimonials, {
    nullable: true,
  })
  project: Project;

  // For AdminJS
  @Column({ nullable: true })
  @RelationId((testimonial: Testimonial) => testimonial.project)
  projectId: number;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.authorName);
    this.metaTitle = this.authorName;
  }
}
