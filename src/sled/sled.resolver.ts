import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManySledArgs } from '../@generated/prisma-nestjs-graphql/sled/find-many-sled.args'
import { FindUniqueSledArgs } from '../@generated/prisma-nestjs-graphql/sled/find-unique-sled.args'
import { CreateOneSledArgs } from '../@generated/prisma-nestjs-graphql/sled/create-one-sled.args'
import { UpdateOneSledArgs } from '../@generated/prisma-nestjs-graphql/sled/update-one-sled.args'
import { DeleteOneSledArgs } from '../@generated/prisma-nestjs-graphql/sled/delete-one-sled.args'
import { Sled } from '../@generated/prisma-nestjs-graphql/sled/sled.model'
import { SledService } from './sled.service'

@Resolver(() => Sled)
export class SledResolver {
  constructor(private readonly sledService: SledService) {}

  @Query(() => [Sled])
  indexSleds(@Args() args: FindManySledArgs) {
    return this.sledService.findMany(args)
  }

  @Mutation(() => Sled)
  async createSled(@Args() args: CreateOneSledArgs): Promise<Sled> {
    return this.sledService.create(args)
  }

  @Mutation(() => Sled)
  async updateSled(@Args() args: UpdateOneSledArgs): Promise<Sled> {
    return this.sledService.update(args)
  }

  @Mutation(() => Sled)
  async deleteSled(@Args() args: DeleteOneSledArgs): Promise<Sled> {
    return this.sledService.delete(args)
  }

  @ResolveField()
  async club(@Parent() sled: Sled) {
    const arg: FindUniqueSledArgs = { where: { id: sled.id } }
    return (await this.sledService.getRelationField(arg)).club
  }

  @ResolveField()
  async sledComments(@Parent() sled: Sled) {
    const arg: FindUniqueSledArgs = { where: { id: sled.id } }
    return (await this.sledService.getRelationField(arg)).sledComments
  }
}
