import { Args, Parent, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { FindManyMembershipFeeArgs } from '../@generated/prisma-nestjs-graphql/membership-fee/find-many-membership-fee.args'
import { FindUniqueMembershipFeeArgs } from '../@generated/prisma-nestjs-graphql/membership-fee/find-unique-membership-fee.args'
import { CreateOneMembershipFeeArgs } from '../@generated/prisma-nestjs-graphql/membership-fee/create-one-membership-fee.args'
import { UpdateOneMembershipFeeArgs } from '../@generated/prisma-nestjs-graphql/membership-fee/update-one-membership-fee.args'
import { DeleteOneMembershipFeeArgs } from '../@generated/prisma-nestjs-graphql/membership-fee/delete-one-membership-fee.args'
import { MembershipFee } from '../@generated/prisma-nestjs-graphql/membership-fee/membership-fee.model'
import { MembershipFeeService } from './membership-fee.service'

@Resolver(() => MembershipFee)
export class MembershipFeeResolver {
  constructor(private readonly membershipFeeService: MembershipFeeService) {}

  @Query(() => [MembershipFee])
  indexMembershipFees(@Args() args: FindManyMembershipFeeArgs) {
    return this.membershipFeeService.findMany(args)
  }

  @Mutation(() => MembershipFee)
  async createMembershipFee(@Args() args: CreateOneMembershipFeeArgs): Promise<MembershipFee> {
    return this.membershipFeeService.create(args)
  }

  @Mutation(() => MembershipFee)
  async updateMembershipFee(@Args() args: UpdateOneMembershipFeeArgs): Promise<MembershipFee> {
    return this.membershipFeeService.update(args)
  }

  // @Mutation(() => MembershipFee)
  // async deleteMembershipFee(@Args() args: DeleteOneMembershipFeeArgs): Promise<MembershipFee> {
  //   return this.membershipFeeService.delete(args)
  // }

  @ResolveField()
  async user(@Parent() membershipFee: MembershipFee) {
    const arg: FindUniqueMembershipFeeArgs = { where: { id: membershipFee.id } }
    return (await this.membershipFeeService.getRelationField(arg)).user
  }

  @ResolveField()
  async club(@Parent() membershipFee: MembershipFee) {
    const arg: FindUniqueMembershipFeeArgs = { where: { id: membershipFee.id } }
    return (await this.membershipFeeService.getRelationField(arg)).club
  }
}
