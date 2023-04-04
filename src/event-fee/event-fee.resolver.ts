import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyEventFeeArgs } from '../@generated/prisma-nestjs-graphql/event-fee/find-many-event-fee.args'
import { FindUniqueEventFeeArgs } from '../@generated/prisma-nestjs-graphql/event-fee/find-unique-event-fee.args'
import { CreateOneEventFeeArgs } from '../@generated/prisma-nestjs-graphql/event-fee/create-one-event-fee.args'
import { UpdateOneEventFeeArgs } from '../@generated/prisma-nestjs-graphql/event-fee/update-one-event-fee.args'
import { DeleteOneEventFeeArgs } from '../@generated/prisma-nestjs-graphql/event-fee/delete-one-event-fee.args'
import { EventFee } from '../@generated/prisma-nestjs-graphql/event-fee/event-fee.model'
import { EventFeeService } from './event-fee.service'

@Resolver(() => EventFee)
export class EventFeeResolver {
  constructor(private readonly eventFeeService: EventFeeService) {}

  @Query(() => [EventFee])
  indexEventFees(@Args() args: FindManyEventFeeArgs) {
    return this.eventFeeService.findMany(args)
  }

  @Mutation(() => EventFee)
  async createEventFee(@Args() args: CreateOneEventFeeArgs): Promise<EventFee> {
    return this.eventFeeService.create(args)
  }

  @Mutation(() => EventFee)
  async updateEventFee(@Args() args: UpdateOneEventFeeArgs): Promise<EventFee> {
    return this.eventFeeService.update(args)
  }

  // @Mutation(() => EventFee)
  // async deleteEventFee(@Args() args: DeleteOneEventFeeArgs): Promise<EventFee> {
  //   return this.eventFeeService.delete(args)
  // }

  @ResolveField()
  async user(@Parent() eventFee: EventFee) {
    const arg: FindUniqueEventFeeArgs = { where: { id: eventFee.id } }
    return (await this.eventFeeService.getRelationField(arg)).user
  }

  @ResolveField()
  async club(@Parent() eventFee: EventFee) {
    const arg: FindUniqueEventFeeArgs = { where: { id: eventFee.id } }
    return (await this.eventFeeService.getRelationField(arg)).club
  }
}
