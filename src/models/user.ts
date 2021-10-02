import { IDBDocument } from './db-document';

export interface IUser {
  readonly username: string;
  readonly email: string;
}

export interface IDBUser extends IDBDocument, IUser { }