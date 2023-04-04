import { Module } from '@nestjs/common'
import { ClubService } from './club.service'
import { ClubResolver } from './club.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [ClubService, ClubResolver, PrismaService],
})
export class ClubModule {}
