import { Module } from '@nestjs/common'
import { UniformOwnerService } from './uniform-owner.service'
import { UniformOwnerResolver } from './uniform-owner.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [UniformOwnerService, UniformOwnerResolver, PrismaService],
})
export class UniformOwnerModule {}
