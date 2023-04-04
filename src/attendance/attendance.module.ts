import { Module } from '@nestjs/common'
import { AttendanceService } from './attendance.service'
import { AttendanceResolver } from './attendance.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [AttendanceService, AttendanceResolver, PrismaService],
})
export class AttendanceModule {}
