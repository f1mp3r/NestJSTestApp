import { EntityRepository } from 'typeorm';
import { CashTerminalLog } from '../../../db/models/cashterminal_log.entity';
import { BaseRepository } from './base.repository';

@EntityRepository(CashTerminalLog)
export class CashTerminalLogRepository extends BaseRepository<CashTerminalLog> {
}