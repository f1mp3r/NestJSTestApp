import { Injectable } from '@nestjs/common';
import {getManager} from 'typeorm';

@Injectable()
export class TypeORMService {
  public getManager() {
    return getManager;
  }
}
