import IServerResponseData from '../shared/response';

import { Topic } from '../shared/enumerations';

export interface IContactResponse extends IServerResponseData {
  readonly data?: Readonly<{
    topic: Topic;
    message: string;
  }>;
}