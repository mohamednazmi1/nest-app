import { Injectable } from '@nestjs/common';
import { Request } from 'express';

import config from '@src/config/env';
import Env from '@src/shared/Env';

@Injectable()
export default class Logger {
  public printPort(port: number) {
    console.log(`Successfully running on port ${port}`);
  }

  public printError(error: Error) {
    console.log(error);
  }

  public printRequest(request: Request) {
    if (config.env === Env.Production) {
      console.log(request);
    }
  }
}
