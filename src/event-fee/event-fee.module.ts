import { Module } from '@nestjs/common'
import { EventFeeService } from './event-fee.service'
import { EventFeeResolver } from './event-fee.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [EventFeeService, EventFeeResolver, PrismaService],
})
export class EventFeeModule {}
