import { ResourceWithOptions } from 'adminjs';

import Career from '@src/models/Career';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const CareerResource: ResourceWithOptions = {
  resource: Career,
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
    listProperties: [...baseListProperties, 'title', 'brief'],
    showProperties: [
      ...baseShowProperties,
      'title',
      'brief',
      'description',
      'location',
      'softSkills',
      'hardSkills',
      'perksAndBenefits',
    ],
    editProperties: [
      ...baseEditProperties,
      'title',
      'brief',
      'description',
      'location',
      'softSkills',
      'hardSkills',
      'perksAndBenefits',
    ],
    filterProperties: [...baseFilterProperties, 'title'],
  },
};

export default CareerResource;
