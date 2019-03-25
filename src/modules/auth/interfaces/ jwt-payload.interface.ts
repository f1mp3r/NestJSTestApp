import { Role } from '../../../db/models/role.entity';

export interface IJwtPayload {
  id: number;
  role: Role;
}
