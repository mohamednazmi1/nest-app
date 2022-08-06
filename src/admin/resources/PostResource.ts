import { ResourceWithOptions } from 'adminjs';

import Post from '@src/models/Post';
import Sidebar from '../utils/Sidebar';
import {
  baseEditProperties,
  baseFilterProperties,
  baseListProperties,
  baseShowProperties,
  beforeList,
  getBaseProperties,
} from './BaseResource';

const PostResource: ResourceWithOptions = {
  resource: Post,
  options: {
    parent: Sidebar.Admin,
    properties: {
      ...getBaseProperties({ title: 'title' }),
      content: {
        type: 'richtext',
      },
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
      'title',
      'isPinned',
      'readTime',
      'numOfVisits',
      'authorId',
    ],
    showProperties: [
      ...baseShowProperties,
      'title',
      'brief',
      'content',
      'readTime',
      'isPinned',
      'numOfVisits',
      'authorId',
    ],
    editProperties: [
      ...baseEditProperties,
      'title',
      'brief',
      'content',
      'readTime',
      'isPinned',
      'authorId',
    ],
    filterProperties: [...baseFilterProperties, 'title', 'authorId'],
  },
};

export default PostResource;
