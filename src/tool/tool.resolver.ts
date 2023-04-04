import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyToolArgs } from '../@generated/prisma-nestjs-graphql/tool/find-many-tool.args'
import { FindUniqueToolArgs } from '../@generated/prisma-nestjs-graphql/tool/find-unique-tool.args'
import { CreateOneToolArgs } from '../@generated/prisma-nestjs-graphql/tool/create-one-tool.args'
import { UpdateOneToolArgs } from '../@generated/prisma-nestjs-graphql/tool/update-one-tool.args'
import { DeleteOneToolArgs } from '../@generated/prisma-nestjs-graphql/tool/delete-one-tool.args'
import { Tool } from '../@generated/prisma-nestjs-graphql/tool/tool.model'
import { ToolService } from './tool.service'

@Resolver(() => Tool)
export class ToolResolver {
  constructor(private readonly toolService: ToolService) {}

  @Query(() => [Tool])
  indexTools(@Args() args: FindManyToolArgs) {
    return this.toolService.findMany(args)
  }

  @Mutation(() => Tool)
  async createTool(@Args() args: CreateOneToolArgs): Promise<Tool> {
    return this.toolService.create(args)
  }

  // @Mutation(() => Tool)
  // async updateTool(@Args() args: UpdateOneToolArgs): Promise<Tool> {
  //   return this.toolService.update(args)
  // }

  @Mutation(() => Tool)
  async deleteTool(@Args() args: DeleteOneToolArgs): Promise<Tool> {
    return this.toolService.delete(args)
  }

  @ResolveField()
  async club(@Parent() tool: Tool) {
    const arg: FindUniqueToolArgs = { where: { id: tool.id } }
    return (await this.toolService.getRelationField(arg)).club
  }

  @ResolveField()
  async toolOwners(@Parent() tool: Tool) {
    const arg: FindUniqueToolArgs = { where: { id: tool.id } }
    return (await this.toolService.getRelationField(arg)).toolOwners
  }
}
