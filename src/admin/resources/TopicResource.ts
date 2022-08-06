import { ResourceWithOptions } from 'adminjs';

import Topic from '@src/models/Topic';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const TopicResource: ResourceWithOptions = {
  resource: Topic,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'name' }),
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
    listProperties: [...baseListProperties, 'name'],
    showProperties: [...baseShowProperties, 'name'],
    editProperties: [...baseEditProperties, 'name'],
    filterProperties: [...baseFilterProperties, 'name'],
  },
};

export default TopicResource;
