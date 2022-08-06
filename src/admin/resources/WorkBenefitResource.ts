import { ResourceWithOptions } from 'adminjs';

import WorkBenefit from '@src/models/WorkBenefit';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const WorkBenefitResource: ResourceWithOptions = {
  resource: WorkBenefit,
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

export default WorkBenefitResource;
