import { EntityRepository } from 'typeorm';
import { CashTerminal } from '../../../db/models/cashterminal.entity';
import { BaseRepository } from './base.repository';

@EntityRepository(CashTerminal)
export class CashTerminalRepository extends BaseRepository<CashTerminal> {
}