import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

import BaseModel from './BaseModel';
import Post from './Post';

@Entity({ name: 'team_members' })
export default class Employee extends BaseModel {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  workPosition: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  get fullName() {
    return `${this.firstName.trim()} ${this.lastName.trim()}`;
  }

  public toString(): string {
    return this.fullName;
  }

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.fullName);
    this.metaTitle = `${this.fullName} - ${this.workPosition}`;
  }
}
