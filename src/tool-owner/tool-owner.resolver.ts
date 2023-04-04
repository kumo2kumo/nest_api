import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyToolOwnerArgs } from '../@generated/prisma-nestjs-graphql/tool-owner/find-many-tool-owner.args'
import { FindUniqueToolOwnerArgs } from '../@generated/prisma-nestjs-graphql/tool-owner/find-unique-tool-owner.args'
import { CreateOneToolOwnerArgs } from '../@generated/prisma-nestjs-graphql/tool-owner/create-one-tool-owner.args'
import { UpdateOneToolOwnerArgs } from '../@generated/prisma-nestjs-graphql/tool-owner/update-one-tool-owner.args'
import { DeleteOneToolOwnerArgs } from '../@generated/prisma-nestjs-graphql/tool-owner/delete-one-tool-owner.args'
import { ToolOwner } from '../@generated/prisma-nestjs-graphql/tool-owner/tool-owner.model'
import { ToolOwnerService } from './tool-owner.service'

@Resolver(() => ToolOwner)
export class ToolOwnerResolver {
  constructor(private readonly toolOwnerService: ToolOwnerService) {}

  @Query(() => [ToolOwner])
  indexToolOwners(@Args() args: FindManyToolOwnerArgs) {
    return this.toolOwnerService.findMany(args)
  }

  @Mutation(() => ToolOwner)
  async createToolOwner(@Args() args: CreateOneToolOwnerArgs): Promise<ToolOwner> {
    return this.toolOwnerService.create(args)
  }

  @Mutation(() => ToolOwner)
  async updateToolOwner(@Args() args: UpdateOneToolOwnerArgs): Promise<ToolOwner> {
    return this.toolOwnerService.update(args)
  }

  // @Mutation(() => ToolOwner)
  // async deleteToolOwner(@Args() args: DeleteOneToolOwnerArgs): Promise<ToolOwner> {
  //   return this.toolOwnerService.delete(args)
  // }

  @ResolveField()
  async tool(@Parent() toolOwner: ToolOwner) {
    const arg: FindUniqueToolOwnerArgs = { where: { id: toolOwner.id } }
    return (await this.toolOwnerService.getRelationField(arg)).tool
  }
}
