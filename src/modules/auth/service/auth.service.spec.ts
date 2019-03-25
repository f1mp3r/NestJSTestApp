import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  /* let service: AuthService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();
    service = module.get<AuthService>(AuthService);
  }); */
  it('Empty', () => {
    expect(1).toBe(1);
  });
});
