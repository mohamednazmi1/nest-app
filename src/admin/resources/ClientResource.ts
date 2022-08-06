import { ResourceWithOptions } from 'adminjs';

import Client from '@src/models/Client';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const ClientResource: ResourceWithOptions = {
  resource: Client,
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
    listProperties: [
      ...baseListProperties,
      'name',
      'description',
      'clutchRating',
    ],
    showProperties: [
      ...baseShowProperties,
      'name',
      'description',
      'clutchRating',
    ],
    editProperties: [
      ...baseEditProperties,
      'name',
      'description',
      'clutchRating',
    ],
    filterProperties: [...baseFilterProperties, 'name'],
  },
};

export default ClientResource;
