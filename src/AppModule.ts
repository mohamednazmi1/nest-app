import { AdminModule } from '@adminjs/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import adminModuleOptions from './admin';
import controllers from '@src/controllers';
import dataSourceOptions from './db';
import mappers from '@src/mappers';
import repositories from './repositories';
import utils from './utils';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AdminModule.createAdmin(adminModuleOptions),
  ],
  controllers,
  providers: [...repositories, ...mappers, ...utils],
})
export class AppModule {}
