import { ResourceWithOptions } from 'adminjs';

import Employee from '@src/models/Employee';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const EmployeeResource: ResourceWithOptions = {
  resource: Employee,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'lastName' }),
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
      'firstName',
      'lastName',
      'workPosition',
    ],
    showProperties: [
      ...baseShowProperties,
      'firstName',
      'lastName',
      'workPosition',
    ],
    editProperties: [
      ...baseEditProperties,
      'firstName',
      'lastName',
      'workPosition',
    ],
    filterProperties: [
      ...baseFilterProperties,
      'firstName',
      'lastName',
      'workPosition',
    ],
  },
};

export default EmployeeResource;
