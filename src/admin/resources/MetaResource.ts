import { ResourceWithOptions } from 'adminjs';

import Meta from '@src/models/Meta';
import MetaKey from '@src/shared/MetaKey';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const MetaResource: ResourceWithOptions = {
  resource: Meta,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'key' }),
      key: {
        availableValues: Object.values(MetaKey).map((value) => {
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
      new: { isAccessible: false },
      edit: { isAccessible: true },
      delete: { isAccessible: false },
      bulkDelete: { isAccessible: false },
    },
    listProperties: [...baseListProperties, 'key'],
    showProperties: [...baseShowProperties, 'key'],
    editProperties: [...baseEditProperties, 'key'],
    filterProperties: [...baseFilterProperties, 'key'],
  },
};

export default MetaResource;
