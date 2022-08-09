import { ValueTransformer } from 'typeorm';

export const TrimTransformer: ValueTransformer = {
  from: (value) => value,
  to: (value) => value && String(value).trim(),
};

export const TrimAndLowerTransformer: ValueTransformer = {
  from: (value) => value,
  to: (value) => value && String(value).trim().toLowerCase(),
};
