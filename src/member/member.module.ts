import { Module } from '@nestjs/common'
import { MemberService } from './member.service'
import { MemberResolver } from './member.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [MemberService, MemberResolver, PrismaService],
})
export class MemberModule {}
