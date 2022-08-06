import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/typeorm';
import { AdminModuleOptions } from '@adminjs/nestjs';

import config from '@src/config/env';
import resources from './resources';
import translations from './utils/Translation';

AdminJS.registerAdapter({ Database, Resource });

const adminModuleOptions: AdminModuleOptions = {
  adminJsOptions: {
    resources,
    locale: {
      language: 'en',
      translations,
    },
    branding: {
      companyName: config.adminJs.name,
      logo: false,
      withMadeWithLove: false,
    },
    rootPath: config.adminJs.rootPath,
  },
  auth: {
    authenticate: async (email: string, password: string) => {
      console.log({ password });
      return Promise.resolve({ email });
    },
    cookieName: config.adminJs.cookie.name,
    cookiePassword: config.adminJs.cookie.password,
  },
  sessionOptions: {
    secret: config.adminJs.sessionSecret,
    resave: false,
    saveUninitialized: true,
  },
};

export default adminModuleOptions;
