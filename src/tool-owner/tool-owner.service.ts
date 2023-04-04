import { Injectable } from '@nestjs/common'
import { ToolOwner } from '../@generated/prisma-nestjs-graphql/tool-owner/tool-owner.model'
import { FindManyToolOwnerArgs } from '../@generated/prisma-nestjs-graphql/tool-owner/find-many-tool-owner.args'
import { FindUniqueToolOwnerArgs } from '../@generated/prisma-nestjs-graphql/tool-owner/find-unique-tool-owner.args'
import { CreateOneToolOwnerArgs } from '../@generated/prisma-nestjs-graphql/tool-owner/create-one-tool-owner.args'
import { UpdateOneToolOwnerArgs } from '../@generated/prisma-nestjs-graphql/tool-owner/update-one-tool-owner.args'
import { DeleteOneToolOwnerArgs } from '../@generated/prisma-nestjs-graphql/tool-owner/delete-one-tool-owner.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class ToolOwnerService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyToolOwnerArgs): Promise<ToolOwner[] | null> {
    return this.prisma.toolOwner.findMany(args)
  }

  create(args: CreateOneToolOwnerArgs): Promise<ToolOwner | null> {
    //@ts-ignore
    return this.prisma.toolOwner.create(args)
  }

  update(args: UpdateOneToolOwnerArgs): Promise<ToolOwner | null> {
    //@ts-ignore
    return this.prisma.toolOwner.update(args)
  }

  delete(args: DeleteOneToolOwnerArgs): Promise<ToolOwner | null> {
    return this.prisma.toolOwner.delete(args)
  }

  async getRelationField(args: FindUniqueToolOwnerArgs): Promise<ToolOwner | null> {
    const toolOwner: ToolOwner = await this.prisma.toolOwner.findUnique({
      ...args,
      include: { tool: true },
    })
    return toolOwner
  }
}
