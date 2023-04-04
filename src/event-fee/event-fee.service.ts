import { Injectable } from '@nestjs/common'
import { EventFee } from '../@generated/prisma-nestjs-graphql/event-fee/event-fee.model'
import { FindManyEventFeeArgs } from '../@generated/prisma-nestjs-graphql/event-fee/find-many-event-fee.args'
import { FindUniqueEventFeeArgs } from '../@generated/prisma-nestjs-graphql/event-fee/find-unique-event-fee.args'
import { CreateOneEventFeeArgs } from '../@generated/prisma-nestjs-graphql/event-fee/create-one-event-fee.args'
import { UpdateOneEventFeeArgs } from '../@generated/prisma-nestjs-graphql/event-fee/update-one-event-fee.args'
import { DeleteOneEventFeeArgs } from '../@generated/prisma-nestjs-graphql/event-fee/delete-one-event-fee.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class EventFeeService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyEventFeeArgs): Promise<EventFee[] | null> {
    return this.prisma.eventFee.findMany(args)
  }

  create(args: CreateOneEventFeeArgs): Promise<EventFee | null> {
    //@ts-ignore
    return this.prisma.eventFee.create(args)
  }

  update(args: UpdateOneEventFeeArgs): Promise<EventFee | null> {
    //@ts-ignore
    return this.prisma.eventFee.update(args)
  }

  // delete(args: DeleteOneEventFeeArgs): Promise<EventFee | null> {
  //   return this.prisma.eventFee.delete(args)
  // }

  async getRelationField(args: FindUniqueEventFeeArgs): Promise<EventFee | null> {
    const eventFee: EventFee = await this.prisma.eventFee.findUnique({
      ...args,
      include: { user: true, club: true },
    })
    return eventFee
  }
}
