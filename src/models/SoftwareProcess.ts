import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

import BaseModel from './BaseModel';
import ProcessPoint from './ProcessPoint';

@Entity({ name: 'software_processes' })
export default class SoftwareProcess extends BaseModel {
  @Column()
  title: string;

  @Column({ nullable: true })
  fillerText1: string;

  @Column({ nullable: true })
  fillerText2: string;

  @OneToMany(() => ProcessPoint, (processPoint) => processPoint.softwareProcess)
  points: ProcessPoint[];

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.title);
    this.metaTitle = this.title;
  }
}
