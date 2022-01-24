import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from '../sharable/users/User';
import { BearerAuthGuard } from './bearer-auth.guard';
import { AuthService } from './auth.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterResponse } from '../sharable/auth/RegisterResponse';
import { LoginResponse } from '../sharable/auth/LoginResponse';
import { RestApiResponse } from '../sharable/common/RestApiResponse';
import { RegisterRequest } from '../sharable/auth/RegisterRequest';
import { CurrentUser } from '../decorators/CurrentUser.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiResponse({
    type: RegisterResponse,
  })
  public async register(
    @Body() body: RegisterRequest,
  ): Promise<RegisterResponse> {
    // const token = await this.authService.register(body);

    return new RegisterResponse({
      success: true,
      // token,
    });
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiResponse({
    type: LoginResponse,
  })
  public async login(@CurrentUser() user: User): Promise<LoginResponse> {
    // const token = await this.authService.login(user);

    return new LoginResponse({
      success: true,
      // token,
    });
  }

  @UseGuards(BearerAuthGuard)
  @Post('logout')
  @ApiResponse({
    type: RestApiResponse,
  })
  public async logout(@CurrentUser() user: User): Promise<RestApiResponse> {
    // await this.authService.logout(user);

    return new RestApiResponse({
      success: true,
    });
  }
}
