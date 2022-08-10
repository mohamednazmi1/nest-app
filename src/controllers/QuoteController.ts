import { Controller, Get } from '@nestjs/common';

import MetaKey from '@src/shared/MetaKey';
import MetaRepository from '@src/repositories/MetaRepository';
import Responder from '@src/utils/Responder';

@Controller('/quote')
export default class QuoteController {
  constructor(
    private readonly metaRepository: MetaRepository,
    private readonly responder: Responder,
  ) {}

  @Get('/')
  async list() {
    const meta = await this.metaRepository.findByKey(MetaKey.Quote);
    return this.responder.format(meta);
  }
}
