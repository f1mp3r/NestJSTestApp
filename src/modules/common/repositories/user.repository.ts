import { EntityRepository } from 'typeorm';
import { User } from '../../../db/models/user.entity';
import { BaseRepository } from './base.repository';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {
}
