import { ResourceWithOptions } from 'adminjs';

import Service from '@src/models/Service';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const ServiceResource: ResourceWithOptions = {
  resource: Service,
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
    listProperties: [...baseListProperties, 'name', 'brief'],
    showProperties: [
      ...baseShowProperties,
      'name',
      'brief',
      'fillerText1',
      'fillerText2',
    ],
    editProperties: [
      ...baseEditProperties,
      'name',
      'brief',
      'fillerText1',
      'fillerText2',
    ],
    filterProperties: [...baseFilterProperties, 'name'],
  },
};

export default ServiceResource;
