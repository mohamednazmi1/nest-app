import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  RelationId,
} from 'typeorm';

import BaseModel from './BaseModel';
import Employee from './Employee';
import File from '../shared/File';
import Topic from './Topic';

@Entity({ name: 'posts' })
export default class Post extends BaseModel {
  @Column()
  title: string;

  @Column()
  brief: string;

  @Column()
  content: string;

  @Column()
  readTime: number;

  @Column()
  numOfVisits: number;

  @Column({ default: false })
  isPinned: boolean;

  @Column('jsonb', { nullable: true })
  image: File;

  @ManyToOne(() => Employee, (author) => author.posts)
  author: Employee;

  @ManyToOne(() => Topic, (topic) => topic.posts)
  topic: Topic;

  // For AdminJS
  @Column()
  @RelationId((post: Post) => post.author)
  authorId: number;

  @Column()
  @RelationId((post: Post) => post.topic)
  topicId: number;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.title);
    this.metaTitle = this.title;
  }
}
