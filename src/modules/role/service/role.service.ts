import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from '../../../modules/common/repositories/role.repository';
import { UserRepository } from '../../../modules/common/repositories/user.repository';
import { RoleServiceErr } from '../errors/role.service.err';
import { Role } from './../../../db/models/role.entity';
import { RoleUpdateInput } from './../dto/role-update.input';
import { RoleInput } from './../dto/role.input';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository,

    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,

    private readonly errors: RoleServiceErr,
  ) { }

  public async _createRoleEntity(name: string): Promise<Role> {
    await this.roleRepository.failIfThereIs({
      where: { name },
    }).catch(() => this.errors.AE_ROLE_NAME(name));

    const newRole = this.roleRepository.create({ name });

    return newRole;
  }

  /* Public
  ----------------------*/
  public async createNewRole(data: RoleInput): Promise<Role> {
    const newRole = await this._createRoleEntity(data.name);

    return this.roleRepository.save(newRole);
  }

  public async updateRole(roleId: number, data: RoleUpdateInput): Promise<Role> {
    const theRole = await this.roleRepository.getOneOrFail({
      where: { id: roleId },
    }).catch(() => this.errors.NF_ROLE_ID());

    theRole.name = data.name;

    return this.roleRepository.save(theRole);
  }

  public async deleteRole(roleId: number): Promise<boolean> {
    const theRole = await this.roleRepository.getOneOrFail({
      where: { id: roleId },
    }).catch(() => this.errors.NF_ROLE_ID());

    await this.userRepository.failIfThereIs({
      where: { roleId, }
    }).catch(() => this.errors.CD_ROLE_IN_USE(theRole.name));

    // Delete the role
    await this.roleRepository.softDelete(theRole);

    // Deleted
    return true;
  }

  public async getRole(roleId: number): Promise<Role> {
    return this.roleRepository.getOneOrFail({
      where: { id: roleId },
    }).catch(() => this.errors.NF_ROLE_ID());
  }

  public async getAllRolesWithRoutes(): Promise<Role[]> {
    return this.roleRepository.getAll();
  }

  public async getAllRoles(): Promise<Role[]> {
    return this.roleRepository.getAll();
  }
}
