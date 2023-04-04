import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyScheduleArgs } from '../@generated/prisma-nestjs-graphql/schedule/find-many-schedule.args'
import { FindUniqueScheduleArgs } from '../@generated/prisma-nestjs-graphql/schedule/find-unique-schedule.args'
import { CreateOneScheduleArgs } from '../@generated/prisma-nestjs-graphql/schedule/create-one-schedule.args'
import { UpdateOneScheduleArgs } from '../@generated/prisma-nestjs-graphql/schedule/update-one-schedule.args'
import { DeleteOneScheduleArgs } from '../@generated/prisma-nestjs-graphql/schedule/delete-one-schedule.args'
import { Schedule } from '../@generated/prisma-nestjs-graphql/schedule/schedule.model'
import { ScheduleService } from './schedule.service'

@Resolver(() => Schedule)
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Query(() => [Schedule])
  indexSchedules(@Args() args: FindManyScheduleArgs) {
    return this.scheduleService.findMany(args)
  }

  @Mutation(() => Schedule)
  async createSchedule(@Args() args: CreateOneScheduleArgs): Promise<Schedule> {
    return this.scheduleService.create(args)
  }

  @Mutation(() => Schedule)
  async updateSchedule(@Args() args: UpdateOneScheduleArgs): Promise<Schedule> {
    return this.scheduleService.update(args)
  }

  @Mutation(() => Schedule)
  async deleteSchedule(@Args() args: DeleteOneScheduleArgs): Promise<Schedule> {
    return this.scheduleService.delete(args)
  }

  @ResolveField()
  async attendances(@Parent() schedule: Schedule) {
    const arg: FindUniqueScheduleArgs = { where: { id: schedule.id } }
    return (await this.scheduleService.getRelationField(arg)).attendances
  }
}
