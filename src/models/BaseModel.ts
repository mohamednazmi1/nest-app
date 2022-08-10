import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Status from '@src/shared/Status';
import { TrimTransformer } from './transformers';

@Entity()
export default class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ transformer: TrimTransformer })
  @Index()
  slug: string;

  @Column({ transformer: TrimTransformer })
  metaTitle: string;

  @Column({ nullable: true, transformer: TrimTransformer })
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
    return text
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '-');
  }
}
