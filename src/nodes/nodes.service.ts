import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NodesService {
  constructor(private readonly prisma: PrismaService) {}
  async findUser(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }
}
