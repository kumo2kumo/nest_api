import { Module } from '@nestjs/common'
import { ToolOwnerService } from './tool-owner.service'
import { ToolOwnerResolver } from './tool-owner.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [ToolOwnerService, ToolOwnerResolver, PrismaService],
})
export class ToolOwnerModule {}
