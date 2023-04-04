import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyUniformOwnerArgs } from '../@generated/prisma-nestjs-graphql/uniform-owner/find-many-uniform-owner.args'
import { FindUniqueUniformOwnerArgs } from '../@generated/prisma-nestjs-graphql/uniform-owner/find-unique-uniform-owner.args'
import { CreateOneUniformOwnerArgs } from '../@generated/prisma-nestjs-graphql/uniform-owner/create-one-uniform-owner.args'
import { UpdateOneUniformOwnerArgs } from '../@generated/prisma-nestjs-graphql/uniform-owner/update-one-uniform-owner.args'
import { DeleteOneUniformOwnerArgs } from '../@generated/prisma-nestjs-graphql/uniform-owner/delete-one-uniform-owner.args'
import { UniformOwner } from '../@generated/prisma-nestjs-graphql/uniform-owner/uniform-owner.model'
import { UniformOwnerService } from './uniform-owner.service'

@Resolver(() => UniformOwner)
export class UniformOwnerResolver {
  constructor(private readonly uniformOwnerService: UniformOwnerService) {}

  @Query(() => [UniformOwner])
  indexUniformOwners(@Args() args: FindManyUniformOwnerArgs) {
    return this.uniformOwnerService.findMany(args)
  }

  @Mutation(() => UniformOwner)
  async createUniformOwner(@Args() args: CreateOneUniformOwnerArgs): Promise<UniformOwner> {
    return this.uniformOwnerService.create(args)
  }

  @Mutation(() => UniformOwner)
  async updateUniformOwner(@Args() args: UpdateOneUniformOwnerArgs): Promise<UniformOwner> {
    return this.uniformOwnerService.update(args)
  }

  // @Mutation(() => UniformOwner)
  // async deleteUniformOwner(@Args() args: DeleteOneUniformOwnerArgs): Promise<UniformOwner> {
  //   return this.uniformOwnerService.delete(args)
  // }

  @ResolveField()
  async user(@Parent() uniformOwner: UniformOwner) {
    const arg: FindUniqueUniformOwnerArgs = { where: { id: uniformOwner.id } }
    return (await this.uniformOwnerService.getRelationField(arg)).user
  }

  @ResolveField()
  async club(@Parent() uniformOwner: UniformOwner) {
    const arg: FindUniqueUniformOwnerArgs = { where: { id: uniformOwner.id } }
    return (await this.uniformOwnerService.getRelationField(arg)).club
  }
}
