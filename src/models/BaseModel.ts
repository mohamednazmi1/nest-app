import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Status from '@src/shared/Status';

@Entity()
export default class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column({ nullable: true })
  metaTitle: string;

  @Column({ nullable: true })
  metaDescription: string;

  @Column({ default: 0 })
  position: number;

  @Column({ enum: Status, default: Status.Published })
  status: Status;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  generateSlug(text: string) {
    return text.trim().toLowerCase().replace(/\s+/g, '-');
  }
}
