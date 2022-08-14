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
  port: +(process.env.PORT || 3000),
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
  s3: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    bucket: 'blink22-website-file-storage',
    endpoint: 'https://nyc3.digitaloceanspaces.com',
    region: 'nyc3',
  },
};

export default config;
