import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

import Application from './Application';
import BaseModel from './BaseModel';

@Entity({ name: 'careers' })
export default class Career extends BaseModel {
  @Column({ unique: true })
  title: string;

  @Column()
  brief: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  location: string;

  @Column()
  softSkills: string;

  @Column()
  hardSkills: string;

  @Column()
  perksAndBenefits: string;

  @OneToMany(() => Application, (application) => application.career)
  applications: Application[];

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.title);
    this.metaTitle = this.title;
  }
}
