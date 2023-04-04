import { Module } from '@nestjs/common'
import { ToolService } from './tool.service'
import { ToolResolver } from './tool.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [ToolService, ToolResolver, PrismaService],
})
export class ToolModule {}
