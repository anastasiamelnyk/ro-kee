import { IsOptional, IsString } from 'class-validator';
import { RestApiResponse } from '../common/RestApiResponse';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponse extends RestApiResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  public token: string;

  constructor(data?: Partial<RegisterResponse>) {
    super(data);

    this.token = data.token || '';
  }
}
