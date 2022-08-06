import { Before, PropertyOptions } from 'adminjs';

import config from '@src/config/env';
import Status from '@src/shared/Status';

export const baseListProperties = ['id', 'status', 'createdAt'];

export const baseShowProperties = [
  'id',
  'slug',
  'status',
  'createdAt',
  'updatedAt',
];

export const baseEditProperties = ['position', 'status'];

export const baseFilterProperties = ['position', 'status'];

interface BaseOptions {
  title: string;
}

export const getBaseProperties = ({
  title,
}: BaseOptions): Record<string, PropertyOptions> => {
  return {
    [title]: {
      isTitle: true,
    },
    status: {
      availableValues: [
        {
          value: Status.Published,
          label: 'Published',
        },
        {
          value: Status.Hidden,
          label: 'Hidden',
        },
      ],
    },
  };
};

export const beforeList: Before = async (request) => {
  if (request.query) {
    request.query.perPage = config.adminJs.pageSize;
  }
  return request;
};
