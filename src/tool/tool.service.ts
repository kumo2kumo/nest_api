import { Injectable } from '@nestjs/common'
import { Tool } from '../@generated/prisma-nestjs-graphql/tool/tool.model'
import { FindManyToolArgs } from '../@generated/prisma-nestjs-graphql/tool/find-many-tool.args'
import { FindUniqueToolArgs } from '../@generated/prisma-nestjs-graphql/tool/find-unique-tool.args'
import { CreateOneToolArgs } from '../@generated/prisma-nestjs-graphql/tool/create-one-tool.args'
import { UpdateOneToolArgs } from '../@generated/prisma-nestjs-graphql/tool/update-one-tool.args'
import { DeleteOneToolArgs } from '../@generated/prisma-nestjs-graphql/tool/delete-one-tool.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class ToolService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyToolArgs): Promise<Tool[] | null> {
    return this.prisma.tool.findMany(args)
  }

  create(args: CreateOneToolArgs): Promise<Tool | null> {
    //@ts-ignore
    return this.prisma.tool.create(args)
  }

  // update(args: UpdateOneToolArgs): Promise<Tool | null> {
  //   //@ts-ignore
  //   return this.prisma.tool.update(args)
  // }

  delete(args: DeleteOneToolArgs): Promise<Tool | null> {
    return this.prisma.tool.delete(args)
  }

  async getRelationField(args: FindUniqueToolArgs): Promise<Tool | null> {
    const tool: Tool = await this.prisma.tool.findUnique({
      ...args,
      include: { club: true, toolOwners: true },
    })
    return tool
  }
}
