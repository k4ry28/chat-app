import { Chat } from './chat.entity';
import { User } from './user.entity';
export interface Message {
  id: string;
  chat: Chat;
  user: User;
  content: string;
  status: string;
  createdAt: Date;
  quotedMessage?: Message;
}
