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
import { getMediaFeature, getMediaProperties } from '../features/Media';

const WorkBenefitResource: ResourceWithOptions = {
  resource: WorkBenefit,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'title' }),
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
    listProperties: [...baseListProperties, 'title', 'description'],
    showProperties: [...baseShowProperties, 'title', 'description', 'image'],
    editProperties: [...baseEditProperties, 'title', 'description', 'image'],
    filterProperties: [...baseFilterProperties, 'title'],
  },
  features: [getMediaFeature('image')],
};

export default WorkBenefitResource;
