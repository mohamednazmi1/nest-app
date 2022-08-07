import { PropertyOptions } from 'adminjs';
import uploadFeature from '@adminjs/upload';

import config from '@src/config/env';

export const getMediaProperties = (
  fieldName: string,
): Record<string, PropertyOptions> => {
  return {
    [fieldName]: {
      type: 'mixed',
    },
    [`${fieldName}.key`]: {
      isVisible: false,
    },
    [`${fieldName}.bucket`]: {
      isVisible: false,
    },
    [`${fieldName}.mimeType`]: {
      isVisible: false,
    },
    [`${fieldName}.filename`]: {
      isVisible: false,
    },
  };
};

export const getMediaFeature = (fieldName: string) => {
  return uploadFeature({
    provider: {
      aws: { ...config.s3 },
    },
    properties: {
      file: `${fieldName}.file`,
      filePath: `${fieldName}.path`,
      filename: `${fieldName}.filename`,
      filesToDelete: `${fieldName}.filesToDelete`,
      key: `${fieldName}.key`,
      bucket: `${fieldName}.bucket`,
      mimeType: `${fieldName}.mimeType`,
    },
    // validation: {
    //   mimeTypes: ['image/webp'],
    // },
  });
};
