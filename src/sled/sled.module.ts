import { Module } from '@nestjs/common'
import { SledService } from './sled.service'
import { SledResolver } from './sled.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [SledService, SledResolver, PrismaService],
})
export class SledModule {}
