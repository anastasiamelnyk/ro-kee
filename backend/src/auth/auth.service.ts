import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { User } from '../sharable/users/User';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenEntity } from '../database/entities/Token.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(TokenEntity)
    private tokenRepository: Repository<TokenEntity>,
    private usersService: UsersService,
  ) {}

  public async register(createUser: {
    email: string;
    password: string;
  }): Promise<string> {
    const user = await this.usersService.create(createUser);
    return this.login(user);
  }

  public async login(user: User): Promise<string> {
    const token = this.tokenRepository.create({
      user: user,
    });
    // await token.setToken(user.passwordHash);
    await this.tokenRepository.save(token);

    return token.token;
  }

  public async logout(user: User): Promise<any> {
    const tokens = await this.tokenRepository.find({
      where: {
        user: user,
      },
      relations: ['user'],
    });

    return this.tokenRepository.delete(tokens.map(({ uuid }) => uuid));
  }
}
