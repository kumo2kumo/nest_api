import { Injectable } from '@nestjs/common'
import { MembershipFee } from '../@generated/prisma-nestjs-graphql/membership-fee/membership-fee.model'
import { FindManyMembershipFeeArgs } from '../@generated/prisma-nestjs-graphql/membership-fee/find-many-membership-fee.args'
import { FindUniqueMembershipFeeArgs } from '../@generated/prisma-nestjs-graphql/membership-fee/find-unique-membership-fee.args'
import { CreateOneMembershipFeeArgs } from '../@generated/prisma-nestjs-graphql/membership-fee/create-one-membership-fee.args'
import { UpdateOneMembershipFeeArgs } from '../@generated/prisma-nestjs-graphql/membership-fee/update-one-membership-fee.args'
import { DeleteOneMembershipFeeArgs } from '../@generated/prisma-nestjs-graphql/membership-fee/delete-one-membership-fee.args'
import { PrismaService } from '../prisma.service'

@Injectable()
export class MembershipFeeService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyMembershipFeeArgs): Promise<MembershipFee[] | null> {
    return this.prisma.membershipFee.findMany(args)
  }

  create(args: CreateOneMembershipFeeArgs): Promise<MembershipFee | null> {
    //@ts-ignore
    return this.prisma.membershipFee.create(args)
  }

  update(args: UpdateOneMembershipFeeArgs): Promise<MembershipFee | null> {
    //@ts-ignore
    return this.prisma.membershipFee.update(args)
  }

  delete(args: DeleteOneMembershipFeeArgs): Promise<MembershipFee | null> {
    return this.prisma.membershipFee.delete(args)
  }

  async getRelationField(args: FindUniqueMembershipFeeArgs): Promise<MembershipFee | null> {
    const membershipFee: MembershipFee = await this.prisma.membershipFee.findUnique({
      ...args,
      include: { user: true, club: true },
    })
    return membershipFee
  }
}
