import { ApiProperty } from '@nestjs/swagger';

export class RestApiResponse {
  @ApiProperty()
  public message?: string;

  @ApiProperty()
  public success?: boolean;

  constructor(data: Partial<RestApiResponse>) {
    this.message = data?.message || undefined;
    ('');
    this.success = data?.success;
  }
}
