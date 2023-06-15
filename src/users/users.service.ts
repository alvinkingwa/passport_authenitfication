import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    { userId: 1, username: 'alvin', password: 'alvin' },
    { userId: 2, username: 'ndiwa', password: 'ndiwa' },
    { userId: 3, username: 'kingwa', password: 'kingwa' },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
