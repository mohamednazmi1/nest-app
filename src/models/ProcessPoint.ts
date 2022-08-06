import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne } from 'typeorm';

import BaseModel from './BaseModel';
import SoftwareProcess from './SoftwareProcess';

@Entity({ name: 'process_points' })
export default class ProcessPoint extends BaseModel {
  @Column()
  name: string;

  @ManyToOne(() => SoftwareProcess, (softwareProcess) => softwareProcess.points)
  softwareProcess: SoftwareProcess;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.name);
    this.metaTitle = this.name;
  }
}
