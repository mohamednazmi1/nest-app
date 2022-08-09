import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import BaseModel from './BaseModel';
import { TrimAndLowerTransformer } from './transformers';

@Entity({ name: 'admins' })
export default class Admin extends BaseModel {
  @Column({ transformer: TrimAndLowerTransformer })
  email: string;

  @Column()
  encryptedPassword: string;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    const slicedEmail = this.email.slice(0, this.email.indexOf('@'));
    this.slug = this.generateSlug(slicedEmail);
    this.metaTitle = slicedEmail;
  }
}
