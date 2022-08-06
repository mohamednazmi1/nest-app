import { ResourceWithOptions } from 'adminjs';

import Technology from '@src/models/Technology';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const TechnologyResource: ResourceWithOptions = {
  resource: Technology,
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
    listProperties: [...baseListProperties, 'title', 'description'],
    showProperties: [...baseShowProperties, 'title', 'description'],
    editProperties: [...baseEditProperties, 'title', 'description'],
    filterProperties: [...baseFilterProperties, 'title'],
  },
};

export default TechnologyResource;
