import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'
import { PrismaService } from '../prisma.service'
import { ClubService } from '../club/club.service'

@Module({
  providers: [UsersService, ClubService, UsersResolver, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
