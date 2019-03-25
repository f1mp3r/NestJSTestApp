import { EntityRepository } from 'typeorm';
import { Role } from '../../../db/models/role.entity';
import { BaseRepository } from './base.repository';

@EntityRepository(Role)
export class RoleRepository extends BaseRepository<Role> {
}
