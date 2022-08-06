import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

import BaseModel from './BaseModel';
import Post from './Post';

@Entity({ name: 'topics' })
export default class Topic extends BaseModel {
  @Column()
  name: string;

  @OneToMany(() => Post, (post) => post.topic)
  posts: Post[];

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.name);
    this.metaTitle = this.name;
  }
}
