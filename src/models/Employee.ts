import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

import BaseModel from './BaseModel';
import File from '../shared/File';
import Post from './Post';
import { TrimTransformer } from './transformers';

@Entity({ name: 'employees' })
export default class Employee extends BaseModel {
  @Column({ transformer: TrimTransformer })
  name: string;

  @Column({ transformer: TrimTransformer })
  workPosition: string;

  @Column('jsonb', { nullable: true })
  image: File;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.name);
    this.metaTitle = `${this.name.trim()} | Team | Blink22`;
  }
}
