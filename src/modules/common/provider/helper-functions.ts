import { Inject, Injectable, } from '@nestjs/common';
import { Moment } from '../interfaces/moment.interface';

@Injectable()
export class HelperFunctions {
  constructor(
    @Inject('moment')
    public readonly moment: Moment,
  ) {}
}
