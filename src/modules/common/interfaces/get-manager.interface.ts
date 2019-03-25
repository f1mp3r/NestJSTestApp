import { EntityManager } from 'typeorm';

export type IGetManager = (connectionName?: string) => EntityManager;
