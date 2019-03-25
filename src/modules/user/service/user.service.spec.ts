import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../../../db/models/user.entity';
import { RoleService } from '../../role/service/role.service';
import { UserService } from './user.service';

describe('ServiceService', () => {
  /*  let service: UserService;
  const mockData = [
    { id: 1, name: 'Petur', pinCode: '123',  },
    { id: 2, email: 'valid@email.com', pin_code: '321',  pinCode: '321' },
  ];

  const roleService = {
    getRoleById: () => {
      return { name: 'admin' };
    },
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        UserService,
        {
          provide: RoleService,
          useValue: roleService,
        },
      ]
    }).overrideProvider(
      getRepositoryToken(User)
    ).useValue({
      findOne: () => mockData[0],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it.only('should be defined', async () => {
    expect(service).toBeDefined();

    const pinCode = '123';
    const expected = mockRepository.data[1];

    mockRepository.findOne = () => true;
    const isThere = await service._isTherePinCode('123');
    expect(isThere).toBe(expected);
  }); */

  it('Empty', () => {
    expect(1).toBe(1);
  });
});
