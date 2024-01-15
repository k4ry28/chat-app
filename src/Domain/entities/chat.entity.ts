import { Message } from './message.entity';
import { User } from './user.entity';

export interface Chat {
  id: string;
  title: string;
  users: User[];
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}
