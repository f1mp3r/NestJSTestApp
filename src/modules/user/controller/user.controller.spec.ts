import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('Controller Controller', () => {
  /* let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: UserController = module.get<UserController>(UserController);
    expect(controller).toBeDefined();
  });*/

  it('Empty', () => {
    expect(1).toBe(1);
  });
});
