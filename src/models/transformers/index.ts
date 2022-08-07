import { ValueTransformer } from 'typeorm';

export const TrimTransformer: ValueTransformer = {
  from: (value) => value,
  to: (value) => String(value).trim(),
};
