import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import config from '@src/config/env';
import models from '@src/models';

const { host, port, username, password, name } = config.db;

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database: name,
  entities: models,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export default dataSourceOptions;
