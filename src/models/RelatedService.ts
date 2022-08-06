import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne } from 'typeorm';

import BaseModel from './BaseModel';
import Service from './Service';

@Entity({ name: 'related_services' })
export default class RelatedService extends BaseModel {
  @Column()
  name: string;

  @ManyToOne(() => Service, (service) => service.relatedServices)
  service: Service;

  @BeforeInsert()
  @BeforeUpdate()
  setMetaData() {
    this.slug = this.generateSlug(this.name);
    this.metaTitle = this.name;
  }
}
