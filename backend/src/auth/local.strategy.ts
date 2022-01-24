import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from '@cjvnjde/passport-local';
import { User } from '../sharable/users/User';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      usernameFields: ['email', 'nickname'],
    });
  }

  public async validate(usernameFields, password): Promise<User> {
    console.log(usernameFields);
    const user = await this.usersService.findOne();
    // const isValidPassword = await user.validatePassword(password);

    // if (!user || !isValidPassword) {
    //   throw new UnauthorizedException();
    // }

    return {} as User;
  }
}
