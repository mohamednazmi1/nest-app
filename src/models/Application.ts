import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne } from 'typeorm';

import BaseModel from './BaseModel';
import Career from './Career';

@Entity({ name: 'position_applications' })
export default class Application extends BaseModel {
  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  message: string;

  @Column({ name: 'social_links', nullable: true })
  linkedin: string;

  @Column({ name: 'graduation', nullable: true })
  graduationYear: string;

  @Column({ nullable: true })
  university: string;

  @Column()
  rejectSent: boolean;

  @ManyToOne(() => Career, (career) => career.applications)
  career: Career;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.id.toString());
    this.metaTitle = this.id.toString();
  }
}
