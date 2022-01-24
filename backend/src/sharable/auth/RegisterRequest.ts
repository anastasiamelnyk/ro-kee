import { IsString } from 'class-validator';

export class RegisterRequest {
  @IsString()
  public email: string;

  @IsString()
  public password: string;
}
