import { Module } from '@nestjs/common'
import { ReportCommentService } from './report-comment.service'
import { ReportCommentResolver } from './report-comment.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [ReportCommentService, ReportCommentResolver, PrismaService],
})
export class ReportCommentModule {}
