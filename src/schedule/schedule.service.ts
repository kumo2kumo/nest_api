import { Injectable } from '@nestjs/common'
import { Schedule } from '../@generated/prisma-nestjs-graphql/schedule/schedule.model'
import { FindManyScheduleArgs } from '../@generated/prisma-nestjs-graphql/schedule/find-many-schedule.args'
import { FindUniqueScheduleArgs } from '../@generated/prisma-nestjs-graphql/schedule/find-unique-schedule.args'
import { CreateOneScheduleArgs } from '../@generated/prisma-nestjs-graphql/schedule/create-one-schedule.args'
import { UpdateOneScheduleArgs } from '../@generated/prisma-nestjs-graphql/schedule/update-one-schedule.args'
import { DeleteOneScheduleArgs } from '../@generated/prisma-nestjs-graphql/schedule/delete-one-schedule.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyScheduleArgs): Promise<Schedule[] | null> {
    return this.prisma.schedule.findMany(args)
  }

  create(args: CreateOneScheduleArgs): Promise<Schedule | null> {
    //@ts-ignore
    return this.prisma.schedule.create(args)
  }

  update(args: UpdateOneScheduleArgs): Promise<Schedule | null> {
    //@ts-ignore
    return this.prisma.schedule.update(args)
  }

  delete(args: DeleteOneScheduleArgs): Promise<Schedule | null> {
    return this.prisma.schedule.delete(args)
  }

  async getRelationField(args: FindUniqueScheduleArgs): Promise<Schedule | null> {
    const schedule: Schedule = await this.prisma.schedule.findUnique({
      ...args,
      include: { attendances: true },
    })
    return schedule
  }
}
