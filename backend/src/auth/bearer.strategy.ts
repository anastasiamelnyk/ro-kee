import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';
import { AuthService } from './auth.service';

@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  public async validate(token: string): Promise<null> {
    // const user = await this.authService.findUserByToken(token);

    // if (!user) {
    //   throw new UnauthorizedException();
    // }

    return null;
  }
}
