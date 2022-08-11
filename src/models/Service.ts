import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
} from 'typeorm';

import BaseModel from './BaseModel';
import File from '../shared/File';
import Project from './Project';

@Entity({ name: 'services' })
export default class Service extends BaseModel {
  @Column()
  name: string;

  @Column()
  brief: string;

  @Column({ nullable: true })
  fillerText1: string;

  @Column({ nullable: true })
  fillerText2: string;

  @Column('character varying', { array: true, default: [] })
  items: string[];

  @Column('jsonb', { nullable: true })
  image: File;

  @ManyToMany(() => Project, (project) => project.services)
  @JoinTable({
    name: 'projects_services',
    joinColumn: { name: 'service_id' },
    inverseJoinColumn: { name: 'project_id' },
  })
  projects: Project[];

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.name);
    this.metaTitle = this.name;
  }
}
