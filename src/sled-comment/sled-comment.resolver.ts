import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManySledCommentArgs } from '../@generated/prisma-nestjs-graphql/sled-comment/find-many-sled-comment.args'
import { FindUniqueSledCommentArgs } from '../@generated/prisma-nestjs-graphql/sled-comment/find-unique-sled-comment.args'
import { CreateOneSledCommentArgs } from '../@generated/prisma-nestjs-graphql/sled-comment/create-one-sled-comment.args'
import { UpdateOneSledCommentArgs } from '../@generated/prisma-nestjs-graphql/sled-comment/update-one-sled-comment.args'
import { DeleteOneSledCommentArgs } from '../@generated/prisma-nestjs-graphql/sled-comment/delete-one-sled-comment.args'
import { SledComment } from '../@generated/prisma-nestjs-graphql/sled-comment/sled-comment.model'
import { SledCommentService } from './sled-comment.service'

@Resolver(() => SledComment)
export class SledCommentResolver {
  constructor(private readonly sledCommentService: SledCommentService) {}

  @Query(() => [SledComment])
  indexSledComments(@Args() args: FindManySledCommentArgs) {
    return this.sledCommentService.findMany(args)
  }

  @Mutation(() => SledComment)
  async createSledComment(@Args() args: CreateOneSledCommentArgs): Promise<SledComment> {
    return this.sledCommentService.create(args)
  }

  @Mutation(() => SledComment)
  async updateSledComment(@Args() args: UpdateOneSledCommentArgs): Promise<SledComment> {
    return this.sledCommentService.update(args)
  }

  // @Mutation(() => SledComment)
  // async deleteSledComment(@Args() args: DeleteOneSledCommentArgs): Promise<SledComment> {
  //   return this.sledCommentService.delete(args)
  // }

  @ResolveField()
  async user(@Parent() sledComment: SledComment) {
    const arg: FindUniqueSledCommentArgs = { where: { id: sledComment.id } }
    return (await this.sledCommentService.getRelationField(arg)).user
  }

  @ResolveField()
  async updateUser(@Parent() sledComment: SledComment) {
    const arg: FindUniqueSledCommentArgs = { where: { id: sledComment.id } }
    return (await this.sledCommentService.getRelationField(arg)).updateUser
  }

  @ResolveField()
  async sled(@Parent() sledComment: SledComment) {
    const arg: FindUniqueSledCommentArgs = { where: { id: sledComment.id } }
    return (await this.sledCommentService.getRelationField(arg)).sled
  }
}
