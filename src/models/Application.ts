import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne } from 'typeorm';

import { TrimAndLowerTransformer, TrimTransformer } from './transformers';
import BaseModel from './BaseModel';
import Career from './Career';
import Level from '@src/shared/Level';

@Entity({ name: 'applications' })
export default class Application extends BaseModel {
  @Column({ transformer: TrimTransformer })
  name: string;

  @Column({ transformer: TrimTransformer })
  phone: string;

  @Column({ transformer: TrimAndLowerTransformer })
  email: string;

  @Column()
  message: string;

  @Column({ nullable: true })
  linkedin: string;

  @Column({ nullable: true })
  graduationYear: string;

  @Column({ nullable: true })
  university: string;

  @Column({ enum: Level, default: Level.Review })
  level: Level;

  @Column({ default: false })
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
