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
import { getMediaFeature, getMediaProperties } from '../features/Media';

const TestimonialResource: ResourceWithOptions = {
  resource: Testimonial,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'authorName' }),
      ...getMediaProperties('authorImage'),
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
      'authorImage',
      'description',
    ],
    editProperties: [
      ...baseEditProperties,
      'authorName',
      'authorPosition',
      'authorImage',
      'description',
    ],
    filterProperties: [...baseFilterProperties, 'authorName'],
  },
  features: [getMediaFeature('authorImage')],
};

export default TestimonialResource;
