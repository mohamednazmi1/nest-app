import * as dotenv from 'dotenv';

import Env from '@src/shared/Env';

dotenv.config();

const getEnv = (env?: string): Env => {
  if (!!env && (Object.values(Env) as string[]).includes(env)) {
    return env as Env;
  }
  return Env.Development;
};

const config = {
  env: getEnv(process.env.NODE_ENV),
  port: process.env.PORT || 3001,
  auth: {
    secretKey: process.env.JWT_SECRET || 'secret-key',
  },
  db: {
    host: process.env.PSQL_HOST || 'localhost',
    port: 5432,
    username: process.env.PSQL_USER || 'postgres',
    password: process.env.PSQL_PASSWORD || 'postgres',
    name: process.env.PSQL_NAME || 'blink22',
  },
  adminJs: {
    rootPath: '/admin',
    name: 'Blink22',
    pageSize: 50,
    cookie: {
      name: process.env.COOKIE_NAME || 'cookie-name',
      password: process.env.COOKIE_PASSWORD || 'cookie-password',
    },
    sessionSecret: process.env.SESSION_SECRET || 'session-secret',
  },
};

export default config;
