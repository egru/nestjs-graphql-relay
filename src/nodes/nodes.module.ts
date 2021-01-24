import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NodesResolver } from './nodes.resolver';
import { NodesService } from './nodes.service';

@Module({
  imports: [],
  providers: [NodesResolver, NodesService, PrismaService],
})
export class NodesModule {}
