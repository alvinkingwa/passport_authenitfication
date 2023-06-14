import { Injectable } from '@nestjs/common';
import { type } from 'os';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    { userId: 1, username: 'alvin', password: 'changename' },
    { userId: 2, username: 'ndiwa', password: 'changename' },
    { userId: 3, username: 'kingwa', password: 'changename' },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
