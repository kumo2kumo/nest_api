import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyMemberArgs } from '../@generated/prisma-nestjs-graphql/member/find-many-member.args'
import { FindUniqueMemberArgs } from '../@generated/prisma-nestjs-graphql/member/find-unique-member.args'
import { CreateOneMemberArgs } from '../@generated/prisma-nestjs-graphql/member/create-one-member.args'
import { UpdateOneMemberArgs } from '../@generated/prisma-nestjs-graphql/member/update-one-member.args'
import { DeleteOneMemberArgs } from '../@generated/prisma-nestjs-graphql/member/delete-one-member.args'
import { Member } from '../@generated/prisma-nestjs-graphql/member/member.model'
import { MemberService } from './member.service'

@Resolver(() => Member)
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Query(() => [Member])
  indexMembers(@Args() args: FindManyMemberArgs) {
    return this.memberService.findMany(args)
  }

  @Mutation(() => Member)
  async createMember(@Args() args: CreateOneMemberArgs): Promise<Member> {
    return this.memberService.create(args)
  }

  @Mutation(() => Member)
  async updateMember(@Args() args: UpdateOneMemberArgs): Promise<Member> {
    return this.memberService.update(args)
  }

  @Mutation(() => Member)
  async deleteMember(@Args() args: DeleteOneMemberArgs): Promise<Member> {
    return this.memberService.delete(args)
  }

  @ResolveField()
  async user(@Parent() member: Member) {
    const arg: FindUniqueMemberArgs = { where: { id: member.id } }
    return (await this.memberService.getRelationField(arg)).user
  }
}
