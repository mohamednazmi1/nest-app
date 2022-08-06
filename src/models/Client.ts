import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import BaseModel from './BaseModel';

@Entity({ name: 'clients' })
export default class Client extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  clutchRating: number;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.name);
    this.metaTitle = this.name;
  }
}
