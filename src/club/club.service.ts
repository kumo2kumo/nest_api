import { Injectable } from '@nestjs/common'
import { Club } from '../@generated/prisma-nestjs-graphql/club/club.model'
import { FindManyClubArgs } from '../@generated/prisma-nestjs-graphql/club/find-many-club.args'
import { CreateOneClubArgs } from '../@generated/prisma-nestjs-graphql/club/create-one-club.args'
import { UpdateOneClubArgs } from '../@generated/prisma-nestjs-graphql/club/update-one-club.args'
import { DeleteOneClubArgs } from '../@generated/prisma-nestjs-graphql/club/delete-one-club.args'
import { PrismaService } from '../prisma.service'
import { FindUniqueClubArgs } from '../@generated/prisma-nestjs-graphql/club/find-unique-club.args'
@Injectable()
export class ClubService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyClubArgs): Promise<Club[] | null> {
    return this.prisma.club.findMany(args)
  }

  create(args: CreateOneClubArgs): Promise<Club | null> {
    //@ts-ignore
    return this.prisma.club.create(args)
  }

  update(args: UpdateOneClubArgs): Promise<Club | null> {
    //@ts-ignore
    return this.prisma.club.update(args)
  }

  delete(args: DeleteOneClubArgs): Promise<Club | null> {
    return this.prisma.club.delete(args)
  }

  async findClubById(clubId: number): Promise<Club | null> {
    return this.prisma.club.findUnique({ where: { id: clubId } })
  }

  async getRelationField(args: FindUniqueClubArgs): Promise<Club | null> {
    const club: Club = await this.prisma.club.findUnique({
      ...args,
      include: { pictureReports: true, schedules: true, users: true, reports: true },
    })
    return club
  }
}
