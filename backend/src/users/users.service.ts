import { Injectable } from '@nestjs/common';
import { User } from '../sharable/users/User';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../database/entities/User.entity';
import { RegisterRequest } from '../sharable/auth/RegisterRequest';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findOne() {
    return {} as User;
  }

  findOneByToken(token: string) {
    return {} as User;
  }

  public remove(uuid: string): Promise<any> {
    return this.userRepository.delete(uuid);
  }

  public async create(
    createUserRequestDto: RegisterRequest,
  ): Promise<UserEntity> {
    const user = this.userRepository.create(createUserRequestDto);
    await user.setPassword(createUserRequestDto.password);
    await this.userRepository.save(user);
    return user;
  }
}
