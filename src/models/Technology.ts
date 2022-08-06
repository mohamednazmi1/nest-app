import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
} from 'typeorm';

import BaseModel from './BaseModel';
import Project from './Project';

@Entity({ name: 'technologies' })
export default class Technology extends BaseModel {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => Project, (project) => project.technologies)
  @JoinTable({
    name: 'projects_technologies',
    joinColumn: { name: 'technology_id' },
    inverseJoinColumn: { name: 'project_id' },
  })
  projects: Project[];

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.title);
    this.metaTitle = this.title;
  }
}
