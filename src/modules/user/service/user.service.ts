import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from '../../../modules/common/repositories/role.repository';
import { UserRepository } from '../../../modules/common/repositories/user.repository';
import { UserInput } from '../dto/user.input';
import { UserServiceErr } from '../errors/user.service.err';
import { User } from './../../../db/models/user.entity';

@Injectable()
export class UserService{
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,

    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository,

    private readonly erros: UserServiceErr,
  ) {}

  /* Public
  ----------------------*/
  public async createNewUser(userData: UserInput): Promise<User> {
    await this.userRepository.failIfThereIs({
      where: { pinCode: userData.pinCode },
    }).catch(() => this.erros.AE_PIN_CODE(userData.pinCode));

    const theRole = await this.roleRepository.getOneOrFail({
      where: { id: userData.roleId },
    }).catch(() => this.erros.NF_USER_ID());

    const theNewUser = this.userRepository.create(userData);

    theNewUser.role = theRole;

    return this.userRepository.save(theNewUser);
  }

  public async updateUser(userId: number, userData: UserInput): Promise<User> {
    const theUser = await this.userRepository.getOneOrFail({
      where: { id: userId },
      relations: ['role'],
    }).catch(() => this.erros.NF_USER_ID());

    if (theUser.pinCode !== userData.pinCode) {
      await this.userRepository.failIfThereIs({
        where: { pinCode: userData.pinCode },
      }).catch(() => this.erros.AE_PIN_CODE(userData.pinCode));
    }

    const theRole = await this.roleRepository.getOneOrFail({
      where: {id: userData.roleId},
    }).catch(() => this.erros.NF_ROLE_ID());

    if (theUser.roleId !== userData.roleId) {
      theUser.role = theRole;
    }

    const dataForUpdate = Object.assign(
      theUser,
      userData
    );

    return this.userRepository.save(dataForUpdate);
  }

  public async deleteUser(userId: number): Promise<boolean> {
    const theUser = await this.userRepository.getOneOrFail({
      where: { id: userId },
    }).catch(() => this.erros.NF_USER_ID());

    await this.userRepository.softDelete(theUser);

    return true;
  }

  public async getUser(userId: number): Promise<User> {
    return this.userRepository.getOneOrFail({
      where: { id: userId },
      relations: ['role'],
    }).catch(() => this.erros.NF_USER_ID());
  }

  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAll({
      relations: ['role']
    });
  }
}
