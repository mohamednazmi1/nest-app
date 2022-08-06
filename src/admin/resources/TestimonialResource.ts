import { ResourceWithOptions } from 'adminjs';

import Testimonial from '@src/models/Testimonial';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const TestimonialResource: ResourceWithOptions = {
  resource: Testimonial,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'authorName' }),
    },
    actions: {
      list: {
        before: beforeList,
        isAccessible: true,
        showFilter: true,
      },
      show: { isAccessible: true },
      new: { isAccessible: true },
      edit: { isAccessible: true },
      delete: { isAccessible: false },
      bulkDelete: { isAccessible: false },
    },
    listProperties: [
      ...baseListProperties,
      'authorName',
      'authorPosition',
      'description',
    ],
    showProperties: [
      ...baseShowProperties,
      'authorName',
      'authorPosition',
      'description',
    ],
    editProperties: [
      ...baseEditProperties,
      'authorName',
      'authorPosition',
      'description',
    ],
    filterProperties: [...baseFilterProperties, 'authorName'],
  },
};

export default TestimonialResource;
