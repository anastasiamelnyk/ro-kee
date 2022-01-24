import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenEntity } from '../database/entities/Token.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { BearerStrategy } from './bearer.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([TokenEntity]),
    UsersModule,
    PassportModule,
  ],

  providers: [AuthService, LocalStrategy, BearerStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
