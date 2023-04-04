import { Module } from '@nestjs/common'
import { SledCommentService } from './sled-comment.service'
import { SledCommentResolver } from './sled-comment.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [SledCommentService, SledCommentResolver, PrismaService],
})
export class SledCommentModule {}
