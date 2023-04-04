import { Module } from '@nestjs/common'
import { MembershipFeeService } from './membership-fee.service'
import { MembershipFeeResolver } from './membership-fee.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [MembershipFeeService, MembershipFeeResolver, PrismaService],
})
export class MembershipFeeModule {}
