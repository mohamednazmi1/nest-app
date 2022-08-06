import { ResourceWithOptions } from 'adminjs';

import Admin from '@src/models/Admin';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const AdminResource: ResourceWithOptions = {
  resource: Admin,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'email' }),
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
    listProperties: [...baseListProperties, 'email', 'signInCount'],
    showProperties: [
      ...baseShowProperties,
      'email',
      'signInCount',
      'currentSignInAt',
    ],
    editProperties: [...baseEditProperties, 'email'],
    filterProperties: [...baseFilterProperties, 'email'],
  },
};

export default AdminResource;
