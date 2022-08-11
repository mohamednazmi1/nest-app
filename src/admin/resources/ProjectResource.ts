import { ResourceWithOptions } from 'adminjs';

import Platform from '@src/shared/Platform';
import Project from '@src/models/Project';
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

const ProjectResource: ResourceWithOptions = {
  resource: Project,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'title' }),
      ...getMediaProperties('image'),
      ...getMediaProperties('coverImage'),
      platforms: {
        availableValues: Object.values(Platform).map((value) => {
          return { value, label: value };
        }),
      },
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
    listProperties: [...baseListProperties, 'title', 'brief'],
    showProperties: [
      ...baseShowProperties,
      'title',
      'brief',
      'description',
      'categories',
      'platforms',
      'challenge',
      'solution',
      'outcome',
      'image',
      'coverImage',
    ],
    editProperties: [
      ...baseEditProperties,
      'title',
      'brief',
      'description',
      'categories',
      'platforms',
      'challenge',
      'solution',
      'outcome',
      'image',
      'coverImage',
    ],
    filterProperties: [...baseFilterProperties, 'title'],
  },
  features: [getMediaFeature('image'), getMediaFeature('coverImage')],
};

export default ProjectResource;
