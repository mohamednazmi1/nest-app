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

const ProjectResource: ResourceWithOptions = {
  resource: Project,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'title' }),
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
    listProperties: [
      ...baseListProperties,
      'title',
      'brief',
      'categories',
      'platforms',
    ],
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
    ],
    filterProperties: [...baseFilterProperties, 'title'],
  },
};

export default ProjectResource;
