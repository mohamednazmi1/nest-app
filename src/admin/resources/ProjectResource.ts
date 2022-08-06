import { ResourceWithOptions } from 'adminjs';

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
      'category',
      'platform',
    ],
    showProperties: [
      ...baseShowProperties,
      'title',
      'brief',
      'description',
      'category',
      'platform',
      'challenge',
      'solution',
      'outcome',
    ],
    editProperties: [
      ...baseEditProperties,
      'title',
      'brief',
      'description',
      'category',
      'platform',
      'challenge',
      'solution',
      'outcome',
    ],
    filterProperties: [...baseFilterProperties, 'title'],
  },
};

export default ProjectResource;
