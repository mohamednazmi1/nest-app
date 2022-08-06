import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';

import Admin from '@src/models/Admin';
import config from '@src/config/env';

@Injectable()
export default class Authenticator {
  public async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 8);
  }

  public async compare(
    password: string,
    currentPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, currentPassword);
  }

  public generateJwt(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
    };
    return jwt.sign(payload, config.auth.secretKey);
  }
}
