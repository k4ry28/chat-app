import { Chat } from './chat.entity';
import { Message } from './message.entity';

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  status: string;
  chats: Chat[];
  messages: Message[];
}
