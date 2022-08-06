import { ResourceWithOptions } from 'adminjs';

import AdminResource from './AdminResource';
import CareerResource from './CareerResource';
import ClientResource from './ClientResource';
import EmployeeResource from './EmployeeResource';
import MetaResource from './MetaResource';
import PostResource from './PostResource';
import ProjectResource from './ProjectResource';
import ServiceResource from './ServiceResource';
import TechnologyResource from './TechnologyResource';
import TestimonialResource from './TestimonialResource';
import TopicResource from './TopicResource';
import WorkBenefitResource from './WorkBenefitResource';

const resources: ResourceWithOptions[] = [
  AdminResource,
  CareerResource,
  ClientResource,
  EmployeeResource,
  MetaResource,
  PostResource,
  ProjectResource,
  ServiceResource,
  TechnologyResource,
  TestimonialResource,
  TopicResource,
  WorkBenefitResource,
];

export default resources;
