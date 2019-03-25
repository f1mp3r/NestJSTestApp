import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GuardService } from '../services/guard.service';

@Injectable()
export class RolesGuard implements CanActivate {
  public async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    return true;
  }
}
