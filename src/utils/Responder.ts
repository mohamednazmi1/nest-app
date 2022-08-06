import { Injectable } from '@nestjs/common';
import { Response } from 'express';

import Message from '@src/shared/Message';

interface Meta {
  metaTitle: string;
  metaDescription: string;
}

@Injectable()
export default class Responder {
  public format(meta: Meta | null, data?: object, response?: Response) {
    const object = {
      meta: {
        title: meta?.metaTitle,
        description: meta?.metaDescription,
      },
      data,
    };
    return !response ? object : response.json(object);
  }

  public format404(response: Response) {
    return response.status(404).json({
      meta: {
        title: Message.NotFound,
      },
    });
  }
}
