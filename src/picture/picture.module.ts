import { Module } from '@nestjs/common'
import { PictureService } from './picture.service'
import { PictureResolver } from './picture.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [PictureService, PictureResolver, PrismaService],
})
export class PictureModule {}
