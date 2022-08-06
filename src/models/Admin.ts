import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import BaseModel from './BaseModel';

@Entity({ name: 'admin_users' })
export default class Admin extends BaseModel {
  @Column()
  email: string;

  @Column()
  encryptedPassword: string;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  resetPasswordSentAt: Date;

  @Column({ nullable: true })
  rememberCreatedAt: Date;

  @Column({ default: 0 })
  signInCount: number;

  @Column()
  currentSignInAt: Date;

  @Column()
  lastSignInAt: Date;

  @Column()
  currentSignInIp: string;

  @Column()
  lastSignInIp: string;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.email);
    this.metaTitle = this.email;
  }
}
