import { Module } from '@nestjs/common'
import { PictureReportService } from './picture-report.service'
import { PictureReportResolver } from './picture-report.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [PictureReportService, PictureReportResolver, PrismaService],
})
export class PictureReportModule {}
