import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

import Application from './Application';
import BaseModel from './BaseModel';
import { TrimTransformer } from './transformers';

@Entity({ name: 'careers' })
export default class Career extends BaseModel {
  @Column({ unique: true, transformer: TrimTransformer })
  title: string;

  @Column({ transformer: TrimTransformer })
  brief: string;

  @Column({ transformer: TrimTransformer })
  description: string;

  @Column({ nullable: true })
  location: string;

  @Column('character varying', { array: true, default: [] })
  softSkills: string[];

  @Column('character varying', { array: true, default: [] })
  hardSkills: string[];

  @Column('character varying', { array: true, default: [] })
  perksAndBenefits: string[];

  @OneToMany(() => Application, (application) => application.career)
  applications: Application[];

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.title);
    this.metaTitle = this.title;
  }
}
