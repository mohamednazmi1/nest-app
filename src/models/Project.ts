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
import Service from './Service';
import Technology from './Technology';
import Testimonial from './Testimonial';

@Entity({ name: 'projects' })
export default class Project extends BaseModel {
  @Column()
  title: string;

  @Column({ nullable: true })
  brief: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  platform: string;

  @Column({ nullable: true })
  challenge: string;

  @Column({ nullable: true })
  solution: string;

  @Column({ nullable: true })
  outcome: string;

  /* @Column({ nullable: true })
  ios: string;

  @Column({ nullable: true })
  android: string;

  @Column({ nullable: true })
  website: string; */

  @OneToMany(() => Testimonial, (testimonial) => testimonial.project)
  testimonials: Testimonial[];

  @ManyToMany(() => Technology, (technology) => technology.projects)
  @JoinTable({
    name: 'projects_technologies',
    joinColumn: { name: 'project_id' },
    inverseJoinColumn: { name: 'technology_id' },
  })
  technologies: Technology[];

  @ManyToMany(() => Service, (service) => service.projects)
  @JoinTable({
    name: 'projects_services',
    joinColumn: { name: 'project_id' },
    inverseJoinColumn: { name: 'service_id' },
  })
  services: Service[];

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.title);
    this.metaTitle = this.title;
  }
}
