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
import { getMediaFeature, getMediaProperties } from '../features/Media';

const EmployeeResource: ResourceWithOptions = {
  resource: Employee,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'name' }),
      ...getMediaProperties('image'),
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
    listProperties: [...baseListProperties, 'name', 'workPosition'],
    showProperties: [...baseShowProperties, 'name', 'workPosition', 'image'],
    editProperties: [...baseEditProperties, 'name', 'workPosition', 'image'],
    filterProperties: [...baseFilterProperties, 'name', 'workPosition'],
  },
  features: [getMediaFeature('image')],
};

export default EmployeeResource;
