import { BearerAuthGuard } from './bearer-auth.guard';

describe('BearerAuthGuard', () => {
  it('should be defined', () => {
    expect(new BearerAuthGuard()).toBeDefined();
  });
});
