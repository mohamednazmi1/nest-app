import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import BaseModel from './BaseModel';
import Project from './Project';
import RelatedService from './RelatedService';

@Entity({ name: 'services' })
export default class Service extends BaseModel {
  @Column()
  name: string;

  @Column()
  brief: string;

  @Column()
  linkName: string;

  @Column({ nullable: true })
  fillerText1: string;

  @Column({ nullable: true })
  fillerText2: string;

  @OneToMany(() => RelatedService, (relatedService) => relatedService.service)
  relatedServices: RelatedService[];

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
